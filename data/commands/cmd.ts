export type Action = {
  name: string
  shortcut?: string[]
  keywords?: string
  href?: string
  section: 'Navigation' | 'Socials' | 'Themes'
  icon?: React.ReactNode
  subtitle?: string
  perform?: () => void
}

export const Navigation: Action[] = [
  {
    name: 'Home',
    keywords: 'home',
    href: '/',
    section: 'Navigation',
  },
  {
    name: 'Writing',
    keywords: 'writing',
    href: '/writing',
    section: 'Navigation',
  },
  {
    name: 'Projects',
    keywords: 'projects',
    href: '/projects',
    section: 'Navigation',
  },
  {
    name: 'Snippets',
    keywords: 'snippet',
    href: '/snippet',
    section: 'Navigation',
  },
]

export const Socials: Action[] = []

export const Themes: Action[] = [
  {
    name: 'Change theme to light',
    keywords: 'light',
    section: 'Themes',
  },
  {
    name: 'Change theme to dark',
    keywords: 'dark',
    section: 'Themes',
  },
]
