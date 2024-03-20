import type { colors, icons } from '@/types'
import styles from './Icon.module.css'

interface IIcon {
  color?: colors
  height?: number
  name: icons
  rotate?: number
  width?: number
}

export default function Icon({ name, width = 26, height = 26, rotate = 0, color }: IIcon) {
  return (
    <img
      alt={name}
      aria-hidden='true'
      className={`${styles.icon} ${color && styles[`icon_color_${color}`]}`}
      src={`/static/icons/${name}.svg`}
      style={{ width: `${width}px`, height: `${height}px`, transform: `rotate(${rotate}deg)` }}
    />
  )
}
