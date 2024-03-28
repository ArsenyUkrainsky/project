import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PostProps, ReviewCardProps, UserInfoProps } from '@/types'
import { useAddCommentMutation } from '@/store/api/apiSlice'
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
  const [addComment, { isLoading, error }] = useAddCommentMutation()
  const { title, reactions, tags, body, id } = post
  const hasComments = comments && comments.length > 0
  const [commentText, setCommentText] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await addComment({ body: commentText, postId: id, userId: user.id })
      setCommentText('')
    } catch (e) {
      console.log(e)
    }
  }

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
              <li key={tag}>
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <Title level={4}>
          Add <span className={styles.form__title}>comment</span>
        </Title>
        <textarea
          className={styles.textarea}
          placeholder='Enter  your comment'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <span className={styles.form__button}>
          <Button type='submit' stretch disabled={isLoading || !commentText}>
            send
          </Button>
        </span>
        {error && <Text color='red'>Произошла ошибка при добавлении комментария - {String(error)}</Text>}
      </form>
    </article>
  )
}
