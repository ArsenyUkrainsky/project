import Title from '@/components/atoms/Title'
import ReviewCard from '@/components/molecules/ReviewCard'
import styles from './ReviewsSection.module.css'
import { reviews } from '@/mock/data'

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <Title level={3}>
        <span className={styles.title}>Customer</span> Say
      </Title>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </ul>
    </section>
  )
}
