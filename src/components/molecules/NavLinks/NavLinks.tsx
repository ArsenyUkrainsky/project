import { Link } from '@/components/atoms/Link'
import styles from './NavLinks.module.css'
import type { INavLinks } from '@/types'

export default function NavLinks({ links }: INavLinks) {
  return (
    <nav className={styles.navLinks}>
      {links.map((link) => (
        <Link href={link.href}>{link.title}</Link>
      ))}
    </nav>
  )
}
