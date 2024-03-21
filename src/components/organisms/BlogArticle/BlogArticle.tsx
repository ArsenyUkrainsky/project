import { useNavigate } from 'react-router-dom'
import type { PostProps, ReviewCardProps, UserInfoProps } from '@/types'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import Icon from '@/components/atoms/Icon'
import UserInfo from '@/components/molecules/UserInfo'
import CommentsList from '@/components/molecules/CommentsList'
import styles from './BlogArticle.module.css'

interface BlogArticleProps {
  post: PostProps
  user: UserInfoProps
  comments?: ReviewCardProps[]
}

export default function BlogArticle({ post, user, comments }: BlogArticleProps) {
  const navigate = useNavigate()
  const { title, reactions, tags, body } = post
  const hasComments = comments && comments.length > 0

  return (
    <article className={styles.block}>
      <Title level={3}>{title}</Title>
      <div className={styles.user}>
        <UserInfo {...user} />
        <div className={styles.reactions}>
          <span className={styles.reactions__item}>
            <Text>{reactions}</Text>
            <Icon name='star' width={16} height={16} />
          </span>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li>
                <Text key={tag}>#{tag} </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Text family='poppins' size='large'>
        {body}
      </Text>
      <span className={styles.button}>
        <Button
          color='transparent'
          onClick={() => navigate('/blog')}
          iconPosition='left'
          iconRotate={180}
          icon='arrow-r'
          iconColor='main'>
          All Articles
        </Button>
      </span>
      {hasComments && <CommentsList comments={comments} />}
    </article>
  )
}
