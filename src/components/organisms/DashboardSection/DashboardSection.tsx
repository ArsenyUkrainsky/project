import { useEffect, useState } from 'react'
import Image from '@/components/atoms/Image'
import Title from '@/components/atoms/Title'
import DashboardCard from '@/components/molecules/DashboardCard'
import { dashboardCards } from '@/mock/data'
import styles from './DashboardSection.module.css'
import { useDeviceType } from '@/hooks'

export default function DashboardSection() {
  const { isMobile, isTablet } = useDeviceType()
  const [imageWidth, setImageWidth] = useState(534)
  const [imageHeight, setImageHeight] = useState(560)

  useEffect(() => {
    switch (true) {
      case isTablet:
        setImageWidth(400)
        setImageHeight(420)
        break
      case isMobile:
        setImageWidth(280)
        setImageHeight(380)
        break
      default:
        setImageWidth(534)
        setImageHeight(560)
    }
  }, [isMobile, isTablet])

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Title level={isMobile ? 3 : 2} weight='bold'>
          Control <span className={styles.title}>Purchases</span> <br /> Via Dashboard
        </Title>
        <ul className={styles.cards}>
          {dashboardCards.map((card) => (
            <DashboardCard key={card.id} {...card} />
          ))}
        </ul>
      </div>
      <Image src='/static/images/purchases.png' alt='purchases control image' width={imageWidth} height={imageHeight} />
    </section>
  )
}
