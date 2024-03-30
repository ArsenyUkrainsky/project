import { useNavigate } from 'react-router-dom'
import type { PostProps } from '@/types'
import Text from '@/components/atoms/Text'
import Icon from '@/components/atoms/Icon'
import { truncateText } from '@/utils'
import styles from './BlogCard.module.css'

export default function BlogCard({ title, body, tags, reactions, id }: PostProps) {
  const navigate = useNavigate()
  return (
    <li className={styles.card} onClick={() => navigate(`/blog/${id}`)}>
      <Text weight='semiBold' family='poppins' size='large'>
        {title}
      </Text>
      <div className={styles.info}>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <Text family='poppins' size='small' color='textGray'>
              #{tag}
            </Text>
          ))}
        </ul>
        <div className={styles.reactions}>
          <Text family='manrope' size='large' color='textGray'>
            {reactions}
          </Text>
          <Icon name='star' width={16} height={16} />
        </div>
      </div>
      <Text family='poppins' size='xMedium'>
        {truncateText(body, 95)}
      </Text>
    </li>
  )
}
