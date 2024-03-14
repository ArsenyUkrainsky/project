import styles from './Link.module.css'

interface ILink {
  href: string
  children: React.ReactNode
  className?: string
}
// TODO: router
export default function Link({ className, href, children }: ILink) {
  return (
    <a className={`${styles.link} ${className ?? ''}`} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
