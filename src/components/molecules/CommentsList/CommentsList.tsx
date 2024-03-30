import type { ReviewCardProps } from '@/types'
import Title from '@/components/atoms/Title'
import ReviewCard from '@/components/molecules/ReviewCard/ReviewCard'
import styles from './CommentsList.module.css'

interface CommentsListProps {
  comments: ReviewCardProps[]
}

export default function CommentsList({ comments }: CommentsListProps) {
  return (
    <div className={styles.container}>
      <Title level={4}>Comments</Title>
      <ul className={styles.list}>
        {comments.map((comment) => (
          <ReviewCard {...comment} stretched key={comment.id} />
        ))}
      </ul>
    </div>
  )
}
