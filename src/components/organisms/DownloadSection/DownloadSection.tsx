import { useEffect, useState } from 'react'
import Image from '@/components/atoms/Image'
import Title from '@/components/atoms/Title'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import { downloadText } from '@/content'
import styles from './DownloadSection.module.css'

interface DownloadSectionProps {
  isMobile: boolean
}

export default function DownloadSection({ isMobile }: DownloadSectionProps) {
  const [imageHeight, setImageHeight] = useState<number>(625)
  const [imageWidth, setImageWidth] = useState<number>(370)

  useEffect(() => {
    if (isMobile) {
      setImageHeight(480)
      setImageWidth(280)
    } else {
      setImageHeight(625)
      setImageWidth(370)
    }
  }, [isMobile])

  return (
    <section className={styles.section}>
      <Image
        alt='Mobile image with app for your health'
        height={imageHeight}
        hiddenArea
        src='/static/images/Mobile.png'
        width={imageWidth}
      />
      <div className={styles.content}>
        <Title level={isMobile ? 3 : 2} weight='bold'>
          Premium <span className={styles.title}>Quality</span> <br /> For Your Health
        </Title>
        <ul className={styles.list}>
          {downloadText.map((text, index) => (
            <li key={index} className={styles.item}>
              <Text color='gray' size={isMobile ? 'medium' : 'large'}>
                {text}
              </Text>
            </li>
          ))}
        </ul>
        <div className={styles.button}>
          <Button onClick={() => {}} icon='arrow-r' size={isMobile ? 'small' : 'medium'}>
            Download
          </Button>
        </div>
      </div>
    </section>
  )
}
