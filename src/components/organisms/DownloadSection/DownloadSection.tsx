import Image from '@/components/atoms/Image'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import { downloadText } from '@/content'
import styles from './DownloadSection.module.css'

export default function DownloadSection() {
  return (
    <section className={styles.section}>
      <Image
        alt='Mobile image with app for your health'
        height={625}
        hiddenArea
        src='/static/images/Mobile.png'
        width={370}
      />
      <div className={styles.content}>
        <Title level={2} weight='bold'>
          Premium <span className={styles.title}>Quality</span> <br /> For Your Health
        </Title>
        <ul className={styles.list}>
          {downloadText.map((text, index) => (
            <li key={index} className={styles.item}>
              <Text color='gray' size='large'>
                {text}
              </Text>
            </li>
          ))}
        </ul>
        <div className={styles.button}>
          <Button onClick={() => {}} icon='arrow-r'>
            Download
          </Button>
        </div>
      </div>
    </section>
  )
}
