import type { ReviewCardProps } from '@/types'
import Text from '@/components/atoms/Text'
import styles from './ReviewCard.module.css'
import Icon from '@/components/atoms/Icon'

export default function ReviewCard({ body, user: { username }, stretched }: ReviewCardProps) {
  return (
    <li className={styles.card} style={{ width: stretched ? '100%' : 'auto' }}>
      <span className={styles.title}>
        <Text weight='medium' family='poppins' size='large'>
          {username}
        </Text>
        <Icon name='review-icon' width={58} height={45} />
      </span>
      <Text style='italic' family='poppins' size='xMedium' color='textGray'>
        {body}
      </Text>
    </li>
  )
}
