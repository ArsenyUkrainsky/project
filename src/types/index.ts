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
id: number
name: string
ingredients: string[]
instructions: string[]
prepTimeMinutes: number
cookTimeMinutes: number
servings: number
difficulty: 'Easy' | 'Medium' | 'Hard'
cuisine: string
caloriesPerServing: number
tags: string[]
userId: number
image: string
rating: number
reviewCount: number
mealType: string[]
}

export interface ReviewCardProps {
  id: number
  body: string
  postId: number
  user: {
    id: number
    username: string
  }
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

export interface PostProps {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}
