import { useRoutes } from 'react-router-dom'
import Blog from '@/components/pages/Blog'
import Home from '@/components/pages/Home'
import BlogArticle from '@/components/pages/BlogArticle'
import NotFoundPage from '@/components/pages/NotFoundPage'

export default function Router() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/blog/:id',
      element: <BlogArticle />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])
  return elements
}
