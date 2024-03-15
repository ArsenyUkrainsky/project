import { useState } from 'react'
import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import Button from '@/components/molecules/Button'
import styles from './FAQSection.module.css'

interface IQuestion {
  title: string
  content: string
}

export default function Question({ title, content }: IQuestion) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className={styles.question}>
      <div className={styles.question__header}>
        <Title level={5}>{title}</Title>
        <Button onClick={() => setIsOpen(!isOpen)} size='sTiny' shape='circle'>
          <span style={{position: 'relative'}}><span className={`${styles.icon} ${isOpen ? styles.icon_opened : ''}`}></span></span>
        </Button>
      </div>
        <span className={`${styles.content} ${isOpen ? styles.content_opened : ''}`}>
          <Text family='poppins' size='large' color='textGray'>
            {content}
          </Text>
        </span>
    </li>
  )
}
