import Text from '@/components/atoms/Text'
import styles from './ReviewCard.module.css'
import Icon from '@/components/atoms/Icon'

interface ReviewCardProps {
  name: string
  review: string
  anonymous: boolean
}

export default function ReviewCard({ name, review, anonymous }: ReviewCardProps) {
  return (
    <li className={styles.card}>
      {!anonymous && (
        <span className={styles.title}>
          <Text weight='medium' family='poppins' size='large'>
            {name}
          </Text>
          <Icon name='review-icon' width={58} height={45} />
        </span>
      )}
      <Text style='italic' family='poppins' size='xMedium' color='textGray'>
        {review}
      </Text>
    </li>
  )
}
