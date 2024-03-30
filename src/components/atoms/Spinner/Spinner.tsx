import Icon from '@/components/atoms/Icon'
import styles from './Spinner.module.css'

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
}

export default function Spinner({ size = 'medium' }: SpinnerProps) {
  const sizeMap = {
    small: 32,
    medium: 64,
    large: 128,
  }

  const iconSize = sizeMap[size]

  return (
    <span className={styles.spinner}>
      <Icon name='spinner' width={iconSize} height={iconSize} />
    </span>
  )
}
