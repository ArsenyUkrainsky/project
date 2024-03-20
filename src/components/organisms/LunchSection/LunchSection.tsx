import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Title from '@/components/atoms/Title'
import LunchCard from '@/components/molecules/LunchCard'
import styles from './LunchSection.module.css'
import { useGetRecipesQuery } from '@/store/api/apiSlice'

export default function LunchSection() {
  const { data, isLoading } = useGetRecipesQuery({ type: 'lunch' })
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
        {data?.map((card) => (
          <LunchCard key={card.id} {...card} />
        ))}
      </ul>
    </section>
  )
}
