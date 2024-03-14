import type { icons } from '@/types'
import { Icon } from '@/components/atoms/Icon'
import styles from './Button.module.css'

interface IButton {
  children: React.ReactNode
  disabled?: boolean
  icon?: icons
  onClick: () => void
  transparent?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  disabled = false,
  icon,
  onClick,
  transparent = false,
  type = 'button',
}: IButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${transparent ? styles.transparent : ''}`}>
      {children}
      {icon && <Icon name={icon} />}
    </button>
  )
}
