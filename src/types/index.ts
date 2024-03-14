export type icons = 'logo' | 'arrow-r' | 'facebook' | 'in' | 'inst' | 'star' | 'twit'

type NavLink = {
  title: string
  href: string
}

export interface INavLinks {
  links: NavLink[]
}