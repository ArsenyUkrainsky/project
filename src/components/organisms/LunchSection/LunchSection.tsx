import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetRecipesQuery } from '@/store/api/apiSlice'
import Title from '@/components/atoms/Title'
import SkeletonList from '@/components/atoms/SkeletonList'
import Notification from '@/components/atoms/Notification'
import LunchCard from '@/components/molecules/LunchCard'
import styles from './LunchSection.module.css'

export default function LunchSection() {
  const { data, isLoading, error } = useGetRecipesQuery({ type: 'lunch' })
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  if (error) return <Notification message={error} type='error' />

  return isLoading ? (
    <SkeletonList count={3} />
  ) : (
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
