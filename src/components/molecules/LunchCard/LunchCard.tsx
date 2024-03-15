import type { LunchCardProps } from '@/types'
import Image from '@/components/atoms/Image'
import Label from '@/components/molecules/Label'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Icon from '@/components/atoms/Icon'
import styles from './LunchCard.module.css'
import Button from '../../atoms/Button'

export default function LunchCard({ title, time, image, rating, label }: LunchCardProps) {
  return (
    <li className={styles.card}>
      <Image src={image} alt={title} width={400} height={176} />
      <div className={styles.content}>
        <Label>{label}</Label>
        <div className={styles.title}>
          <Title level={4}>{title}</Title>
          <span className={styles.bookmark}>
            <Button
              color='light-lavander'
              icon='book-mark'
              iconSizeH={20}
              iconSizeW={15}
              onClick={() => {}}
              shape='circle'
              size='tiny'
            />
          </span>
        </div>
        <div className={styles.info}>
          <Text>{time}</Text>
          <Icon name='star' />
          <Text>{rating}</Text>
        </div>
      </div>
    </li>
  )
}
