import type { LunchCardProps } from '@/types'
import Label from '@/components/molecules/Label'
import Image from '@/components/atoms/Image'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Icon from '@/components/atoms/Icon'
import Button from '@/components/atoms/Button'
import styles from './LunchCard.module.css'

export default function LunchCard({ name, cookTimeMinutes, image, rating, cuisine }: LunchCardProps) {
  return (
    <li className={styles.card}>
      <Image src={image} alt={name} width={400} height={176} />
      <div className={styles.content}>
        <Label>{cuisine}</Label>
        <div className={styles.title}>
          <Title level={4}>{name}</Title>
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
          <Text>{cookTimeMinutes} min</Text>
          <Icon name='star' />
          <Text>{rating}</Text>
        </div>
      </div>
    </li>
  )
}
