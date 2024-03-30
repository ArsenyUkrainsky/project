import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import styles from './App.module.css'
import Router from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <main className={styles.wrapper}>
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
