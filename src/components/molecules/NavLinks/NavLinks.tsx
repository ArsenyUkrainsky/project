import { Link } from '@/components/atoms/Link'
import styles from './NavLinks.module.css'
import type { INavLinks } from '@/types'
import Text from '@/components/atoms/Text'

export default function NavLinks({ links, color = 'dGray' }: INavLinks) {
  return (
    <nav className={styles.navLinks}>
      {links.map((link) => (
        <Link key={link.title} href={link.href}>
          <Text size='xMedium' color={color}>{link.title}</Text>
        </Link>
      ))}
    </nav>
  )
}
