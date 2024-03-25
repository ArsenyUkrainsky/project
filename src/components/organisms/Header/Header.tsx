import NavBar from '@/components/molecules/NavBar/NavBar'
import { navLinks } from '@/content'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <NavBar navLinks={navLinks} mode='header' />
    </header>
  )
}
