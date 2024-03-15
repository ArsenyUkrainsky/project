import { useEffect, useState } from 'react'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Image from '@/components/atoms/Image'
import Button from '@/components/atoms/Button'
import DashboardCard from '@/components/molecules/DashboardCard'
import { useDeviceType } from '@/hooks'
import { dashboardCards } from '@/mock/data'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { isMobile } = useDeviceType()
  const [mainImageWidth, setMainImageWidth] = useState(448)
  const [mainImageHeight, setMainImageHeight] = useState(455)
  const [graphImageWidth, setGraphImageWidth] = useState(278)
  const [graphImageHeight, setGraphImageHeight] = useState(212)
  useEffect(() => {
    if (isMobile) {
      setMainImageWidth(320)
      setMainImageHeight(320)
      setGraphImageWidth(200)
      setGraphImageHeight(150)
    } else {
      setMainImageWidth(448)
      setMainImageHeight(455)
      setGraphImageWidth(278)
      setGraphImageHeight(212)
    }
  }, [isMobile])
  const mockCard = dashboardCards[0]
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
        <div className={styles.section__content_users}>
          <hr className={styles.section__content_users_line} />
          <Text weight='semiBold' family='poppins' className={styles.section__content_users_text}>
            OVER 1000 USERS
          </Text>
        </div>
        <Title level={isMobile ? 3 : 1}>
          Enjoy Foods All Over The <span className={styles.section__title_color}>World</span>
        </Title>
        <Text size='xMedium' className={styles.section__description}>
          EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up
          to two days early. Get a <span className={styles.section__description_color}>$20 bonus</span>.
        </Text>
        <div className={styles.section__buttons}>
          <Button onClick={() => {}} size={isMobile ? 'small' : 'medium'}>
            Get Started
          </Button>
          <Button onClick={() => {}} color='transparent' size={isMobile ? 'small' : 'medium'}>
            Go Pro
          </Button>
        </div>
      </div>
      <div className={styles.section__images}>
        <Image src='/static/images/Food.png' alt='Food' width={mainImageWidth} height={mainImageHeight} />
        <Image
          src='/static/images/Graph.png'
          alt='Graph'
          width={graphImageWidth}
          height={graphImageHeight}
          className={styles.section__images_graph}
        />
        <Image
          src='/static/images/Illustration 01.png'
          alt=''
          width={41}
          height={24}
          hiddenArea
          lazy
          className={styles.section__images_arrowRight}
        />
        <Image
          src='/static/images/Illustration 02.png'
          alt=''
          width={38}
          height={33}
          hiddenArea
          lazy
          className={styles.section__images_arrowLeft}
        />
        <Image
          src='/static/images/Arrow 01.png'
          alt=''
          width={101}
          height={97}
          hiddenArea
          lazy
          className={styles.section__images_arrowUp}
        />
        <div className={styles.section__images_dashboardCard}>
          <DashboardCard {...mockCard} />
        </div>
      </div>
    </section>
  )
}
