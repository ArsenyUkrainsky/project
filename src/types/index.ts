export type icons = 'logo' | 'arrow-r' | 'facebook' | 'in' | 'inst' | 'star' | 'twit' | 'book-mark' | 'review-icon'
export type colors = 'black' | 'red' | 'aGray' | 'sGray' | 'dGray' | 'lavender' | 'white' | 'gray' | 'textGray' | 'footerDarkGray'

export type NavLink = {
  title: string
  href: string
}

export interface INavLinks {
  color: 'dGray' | 'footerDarkGray'
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

export interface SocialLinkProps {
  href: string
  title: string
  icon: icons
}