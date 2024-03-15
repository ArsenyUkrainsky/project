import Image from '@/components/atoms/Image'
import Title from '@/components/atoms/Title'
import styles from './DashboardSection.module.css'
import { dashboardCards } from '@/mock/data'
import DashboardCard from '@/components/molecules/DashboardCard'

export default function DashboardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Title level={2} weight='bold'>
          Control <span className={styles.title}>Purchases</span> <br /> Via Dashboard
        </Title>
        <ul className={styles.cards}>
          {dashboardCards.map((card) => (
            <DashboardCard key={card.id} {...card} />
          ))}
        </ul>
      </div>
      <Image src='/static/images/purchases.png' alt='purchases control image' width={534} height={560} />
    </section>
  )
}
