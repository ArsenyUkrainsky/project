import type { SocialLinkProps, icons } from '@/types'
import Text from '@/components/atoms/Text'
import Link from '@/components/atoms/Link'
import Icon from '@/components/atoms/Icon'
import NavBar from '@/components/molecules/NavBar/NavBar'
import { navLinks, socialLinks } from '@/content'
import styles from './Footer.module.css'

const SocialLink = ({ href, title, icon }: SocialLinkProps) => (
  <li key={title}>
    <Link href={href}>
      <Icon name={icon} width={21} height={21} />
    </Link>
  </li>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <NavBar navLinks={navLinks} mode='footer' />
      <nav className={styles.footerNav}>
        <Text color='footerDarkGray'>© 2023 EATLY All Rights Reserved.</Text>
        <ul className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <SocialLink key={link.title} {...link} icon={link.icon as icons} />
          ))}
        </ul>
      </nav>
    </footer>
  )
}
