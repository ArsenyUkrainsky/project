import Title from '@/components/atoms/Title'
import styles from './LunchSection.module.css'
import { topLunchCards } from '@/mock/data'
import LunchCard from '@/components/molecules/LunchCard'

export default function LunchSection() {
  return (
    <section className={styles.section}>
      <Title level={3} weight='semibold'>
        Our Top <span className={styles.title}>Lunch</span>
      </Title>
      <ul className={styles.cards}>
        {topLunchCards.map((card) => (
          <LunchCard key={card.id} {...card} />
        ))}
      </ul>
    </section>
  )
}
