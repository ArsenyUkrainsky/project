import type { icons } from '@/types'
import Icon from '@/components/atoms/Icon'
import styles from './Button.module.css'

interface IButton {
  children?: React.ReactNode
  color?: 'main' | 'light-lavander' | 'transparent'
  disabled?: boolean
  icon?: icons
  iconSizeW?: number
  iconSizeH?: number
  onClick: () => void
  shape?: 'rounded' | 'circle'
  size?: 'sTiny' | 'tiny' | 'small' | 'medium' | 'large'
  transparent?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  color = 'main',
  disabled = false,
  icon,
  iconSizeW,
  iconSizeH,
  onClick,
  shape = 'rounded',
  size = 'medium',
  type = 'button',
}: IButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} 
      ${styles[`color_${color}`]}
      ${styles[`shape_${shape}`]}
      ${styles[`size_${size}`]}`}>
      {children}
      {icon && <Icon name={icon} width={iconSizeW} height={iconSizeH} />}
    </button>
  )
}
