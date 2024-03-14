export type icons = 'logo' | 'arrow-r' | 'facebook' | 'in' | 'inst' | 'star' | 'twit' | 'book-mark'

type NavLink = {
  title: string
  href: string
}

export interface INavLinks {
  links: NavLink[]
}

export interface LunchCardProps {
  id?: number
  title: string
  time: string
  image: string
  rating: number
  label: string
}

export interface DashboardCardProps {
  id: number
  title: string
  time: string
  image: string
  status: string
  state: string
}
