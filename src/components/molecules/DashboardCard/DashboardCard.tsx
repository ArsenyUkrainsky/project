import type { DashboardCardProps } from '@/types'
import Image from '@/components/atoms/Image'
import Text from '@/components/atoms/Text'
import styles from './DashboardCard.module.css'

export default function DashboardCard({ title, time, image, status, state }: DashboardCardProps) {
  const isActive = state === 'active'
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image src={image} alt={title} width={75} height={75} lazy />
        <div className={styles.text}>
          <Text family='poppins' weight='semiBold' size='medium' color='black'>
            {title}
          </Text>
          <Text family='poppins' weight='medium' size='tiny' color={isActive ? 'black' : 'red'}>
            {status}
          </Text>
        </div>
      </div>
      <Text size='tiny' color='aGray'>
        {time}
      </Text>
    </div>
  )
}
