import { type ReactNode } from 'react'
import styles from './Text.module.css'

interface TextProps {
  children: string | ReactNode
  className?: string
  family?: 'poppins' | 'inter' | 'manrope' | 'publicSans'
  size?: 'tiny' | 'small' | 'xSmall' | 'medium' | 'xMedium' | 'large'
  style?: 'italic' | 'normal'
  weight?: 'regular' | 'medium' | 'bold' | 'semiBold'
}

export default function Text({
  children,
  className,
  family = 'inter',
  size = 'medium',
  style = 'normal',
  weight = 'regular',
}: TextProps) {
  return (
    <p
      className={`
      ${styles.text} 
      ${styles[`text_weight_${weight}`]} 
      ${styles[`text_size_${size}`]} 
      ${styles[`text_family_${family}`]} 
      ${styles[`text_style_${style}`]} 
      ${className}`}>
      {children}
    </p>
  )
}
