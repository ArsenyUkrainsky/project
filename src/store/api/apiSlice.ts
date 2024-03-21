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
    }),
    getPostById: builder.query({
      query: ({ id = '' }) => `/posts/${id}`,
    }),
    getUserById: builder.query({
      query: ({ id = '' }) => `/users/${id}/?&select=firstName,lastName,image`,
    }),
    getCommentsByPostId: builder.query({
      query: ({ id = '', limit = 3 }) => `/comments/post/${id}?limit=${limit}`,
      transformResponse: (response: { comments: ReviewCardProps[] }) => response?.comments ?? [],
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
} = api
