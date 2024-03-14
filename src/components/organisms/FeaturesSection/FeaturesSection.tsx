import Text from '@/components/atoms/Text'
import { featuresText } from '@/content'
import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      {featuresText.map(({title, description}) => (
        <div className={styles.section__feature}>
          <Text size='big' weight='bold' family='publicSans' color='white'>{title}</Text>
          <Text size='xSmall' weight='medium' family='inter' color='lavender'>{description}</Text>
        </div>
      ))}
    </section>
  )
}

