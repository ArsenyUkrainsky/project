import { Logo } from '@/components/molecules/Logo'
import { NavLinks } from '@/components/molecules/NavLinks'
import styles from './Header.module.css'
import { navLinks } from '@/content'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavLinks links={navLinks} />
    </header>
  )
}
