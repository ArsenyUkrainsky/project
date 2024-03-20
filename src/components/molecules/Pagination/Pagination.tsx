import { useLocation, useNavigate } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import styles from './Pagination.module.css'
import { useEffect } from 'react'

interface PaginationProps {
  total: number
  limit: number
}

export default function Pagination({ total, limit }: PaginationProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const pages = Math.ceil(total / limit)
  const prevDisabled = page === 1
  const nextDisabled = page === pages

  const handleNavigate = (page: number) => {
    searchParams.set('page', String(page))
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  const handlePrev = () => {
    if (page > 1) {
      handleNavigate(page - 1)
    }
  }

  const handleNext = () => {
    if (page < pages) {
      handleNavigate(page + 1)
    }
  }

  useEffect(() => {
    // логика для перехода на страницу 404
    // если страница больше чем есть в базе
    if (pages < page) {
      navigate('/not-found', { replace: true })
    }
  }, [navigate, page, pages])

  return (
    <nav className={styles.pagination}>
      <Button
        color='transparent'
        disabled={prevDisabled}
        icon='arrow-r'
        iconColor={prevDisabled ? 'sGray' : 'gray'}
        iconRotate={180}
        iconSizeH={45}
        iconSizeW={30}
        onClick={handlePrev}
        shape='circle'
        size='small'
      />
      <Button
        color='transparent'
        disabled={nextDisabled}
        icon='arrow-r'
        iconColor={nextDisabled ? 'sGray' : 'gray'}
        iconSizeH={45}
        iconSizeW={30}
        onClick={handleNext}
        shape='circle'
        size='small'
      />
    </nav>
  )
}
