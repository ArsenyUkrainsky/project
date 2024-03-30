import { useSearchParams } from 'react-router-dom'
import type { PostProps } from '@/types'
import { useGetPostsQuery } from '@/store/api/apiSlice'
import BlogCard from '@/components/molecules/BlogCard'
import Pagination from '@/components/molecules/Pagination'
import Title from '@/components/atoms/Title'
import SkeletonList from '@/components/atoms/SkeletonList'
import Notification from '@/components/atoms/Notification'
import styles from './BlogSection.module.css'

const SHOW_LIMIT = 12

export default function BlogSection() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const skip = (Number(page) - 1) * SHOW_LIMIT
  const { data, isLoading, error } = useGetPostsQuery({ limit: SHOW_LIMIT, skip })
  const { posts, total } = data ?? { posts: [], total: 0 }

  if (error) return <Notification message={error} type='error' />

  return isLoading ? (
    <SkeletonList />
  ) : (
    <article className={styles.block}>
      <Title level={3}>
        Latest <span className={styles.highlight}>Articles</span>
      </Title>
      <ul className={styles.articles}>
        {posts?.map((post: PostProps) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </ul>
      <Pagination total={total} limit={SHOW_LIMIT} />
    </article>
  )
}
