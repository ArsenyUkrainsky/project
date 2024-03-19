import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import styles from './NotFoundPage.module.css'
import Button from '@/components/atoms/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <section className={styles.section}>
      <Title level={2}>
        <span className={styles.text}>404</span> - Страница не найдена
      </Title>
      <Text weight='semiBold'>Извините, запрашиваемая страница не существует.</Text>
      <Button onClick={() => navigate('/')}>На главную</Button>
    </section>
  )
}
