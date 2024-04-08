import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCommentsByPostIdQuery, useGetPostByIdQuery, useLazyGetUserByIdQuery } from '@/store/api/apiSlice'
import BlogArticleComponent from '@/components/organisms/BlogArticle'
import Spinner from '@/components/atoms/Spinner'

export default function BlogArticle() {
  const { id } = useParams()
  const { data: post, isLoading: postIsLoading, error: postError } = useGetPostByIdQuery({ id })
  const { data: comments, isLoading: commentsIsLoading, error: commentsError } = useGetCommentsByPostIdQuery({ id })
  const [trigger, user] = useLazyGetUserByIdQuery()

  const { data, isLoading, error } = user

  useEffect(() => {
    if (post) {
      const { userId } = post
      trigger({ id: userId })
    }
  }, [post, trigger])

  return postIsLoading || commentsIsLoading || isLoading ? (
    <Spinner size='large' />
  ) : (
    <BlogArticleComponent 
      post={post} 
      user={data} 
      comments={comments}
      postError={postError}
      commentsError={commentsError}
      userError={error}
    />
  )
}
