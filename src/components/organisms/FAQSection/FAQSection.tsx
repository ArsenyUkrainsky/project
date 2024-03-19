import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FAQData } from '@/mock/data'
import Title from '@/components/atoms/Title'
import Question from './Question'
import styles from './FAQSection.module.css'

export default function FAQSection() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <section className={styles.section} id='faq'>
      <div className={styles.header}>
        <Title level={3}>
          Frequently Asked
          <span className={styles.title}><br /> Questions</span>
        </Title>
      </div>
      <ul className={styles.list}>
        {FAQData.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </ul>
    </section>
  )
}
