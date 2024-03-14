import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import Home from '@/components/pages/Home'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
