import { Icon } from '@/components/atoms/Icon'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Icon name='logo' width={46} height={43} />
      <p className={styles.logo__title}>eatly</p>
    </div>
  )
}
