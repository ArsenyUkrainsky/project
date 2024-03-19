import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Title from '@/components/atoms/Title'
import LunchCard from '@/components/molecules/LunchCard'
import { topLunchCards } from '@/mock/data'
import styles from './LunchSection.module.css'

export default function LunchSection() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <section className={styles.section} id='recipes'>
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
