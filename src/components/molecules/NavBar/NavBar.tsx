import type { NavLink } from '@/types'
import Logo from '@/components/molecules/Logo'
import NavLinks from '@/components/molecules/NavLinks'
import styles from './NavBar.module.css'

interface NavBarProps {
  navLinks: NavLink[]
  mode: 'header' | 'footer'
}

export default function NavBar({ navLinks, mode = 'header' }: NavBarProps) {
  const isHeader = mode === 'header'
  const color = isHeader ? 'dGray' : 'footerDarkGray'
  return (
    <nav className={`${styles.nav} ${styles[mode]}`}>
      <Logo />
      <NavLinks links={navLinks} color={color} />
    </nav>
  )
}
