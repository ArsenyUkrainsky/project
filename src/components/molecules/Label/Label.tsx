import Text from '@/components/atoms/Text'
import styles from './Label.module.css'

interface ILabel {
  children: string
}

export default function Label({ children }: ILabel) {
  return <Text size='small' family='poppins' className={styles.label}>{children}</Text>
}
