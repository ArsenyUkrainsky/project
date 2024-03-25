import { type ReactNode } from 'react'
import styles from './Title.module.css'

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
type TitleWeight = 'bold' | 'semibold'

interface ITitle {
  children: ReactNode
  level?: TitleLevel
  weight?: TitleWeight
}

export default function Title({ children, level = 1, weight = 'semibold' }: ITitle) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Tag className={`${styles.title} ${styles[`title_level_${level}`]} ${styles[`title_weight_${weight}`]}`}>
      {children}
    </Tag>
  )
}
