import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { LunchCardProps, PostProps, ReviewCardProps } from '@/types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: ({ type = 'snack' }) => `/recipes/meal-type/${type}`,
      transformResponse: (response: { recipes: LunchCardProps[] }) =>
        (response?.recipes ?? []).sort((a, b) => b.rating - a.rating).slice(0, 3),
    }),
    getComments: builder.query({
      query: ({ limit = 0 }) => `/comments?limit=${limit}`,
      transformResponse: (response: { comments: ReviewCardProps[] }) => response?.comments ?? [],
    }),
    getPosts: builder.query({
      query: ({ limit = 0, skip = 0 }) => `/posts?limit=${limit}&skip=${skip}`,
      transformResponse: (response: { posts: PostProps[]; total: number }) => ({
        posts: response?.posts ?? [],
        total: response?.total ?? 0,
      }),
      onQueryStarted: async ({ limit, skip }, { dispatch, queryFulfilled }) => {
        try {
          // Дожидаемся выполнения исходного запроса
          const { data } = await queryFulfilled
          // Выполняем запрос getUserById для каждого поста параллельно
          const userFetches = data.posts.map((post) =>
            dispatch(api.endpoints.getUserById.initiate({ id: post.userId })).unwrap()
          )
          // Дожидаемся результатов всех запросов
          const users = await Promise.all(userFetches)
          // Создаем карту пользователей для быстрого доступа
          const usersById = users.reduce((acc, user) => {
            acc[user.id] = user
            return acc
          }, {})
          // Обновляем данные постов, добавляя информацию о пользователях
          const updatedPosts = data.posts.map((post) => ({
            ...post,
            user: usersById[post.userId],
          }))
          // Обновляем кэш
          dispatch(
            api.util.updateQueryData('getPosts', { limit, skip }, (draft) => {
              draft.posts = updatedPosts
            })
          )
        } catch (error) {
          console.error('Ошибка при добавлении данных пользователей', error)
        }
      },
    }),
    getPostById: builder.query({
      query: ({ id = '' }) => `/posts/${id}`,
    }),
    getUserById: builder.query({
      query: ({ id = '' }) => `/users/${id}/?&select=firstName,lastName,image`,
    }),
    getCommentsByPostId: builder.query({
      query: ({ id = '', limit = 0 }) => `/comments/post/${id}?limit=${limit}`,
      transformResponse: (response: { comments: ReviewCardProps[] }) => response?.comments ?? [],
    }),
    addComment: builder.mutation({
      query: ({ body, postId, userId }) => ({
        url: '/comments/add',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: {
          body,
          postId,
          userId,
        },
      }),
      onQueryStarted: async (comment, { dispatch, queryFulfilled }) => {
        const { data: addedComment } = await queryFulfilled
        dispatch(
          api.util.updateQueryData('getCommentsByPostId', { id: String(comment.postId) }, (comments) => [
            ...comments,
            addedComment,
          ])
        )
      },
    }),
  }),
})

export const {
  useGetCommentsByPostIdQuery,
  useGetCommentsQuery,
  useGetPostByIdQuery,
  useGetPostsQuery,
  useGetRecipesQuery,
  useLazyGetUserByIdQuery,
  useAddCommentMutation,
} = api
