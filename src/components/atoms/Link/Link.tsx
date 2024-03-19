import { Link } from 'react-router-dom'
import styles from './Link.module.css'

interface ILink {
  href: string
  children: React.ReactNode
  className?: string
  target?: '_blank' | '_self'
  rel?: string
}

export default function CustomLink({ className, href, children, target, rel }: ILink) {
  return (
    <Link className={`${styles.link} ${className ?? ''}`} to={href} target={target} rel={rel}>
      {children}
    </Link>
  )
}
