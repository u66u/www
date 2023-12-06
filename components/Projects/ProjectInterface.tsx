interface Projects {
  link: string
  logo: string
  title: string
  description: string
}

export const AllProjects: Projects[] = [
  {
    link: 'https://vocoapp.com',
    logo: '/images/works/voco/logo.png',
    title: 'Voco Inc.',
    description:
      'A mobile platform where users can freely showcase their creativity in organizing events.',
  },
  {
    link: 'https://eren.si/en',
    logo: '/images/works/erensibot/logo.png',
    title: 'ErensiBot',
    description:
      'A Discord bot that is trusted by half a million Discord servers to manage their community.',
  },
  {
    link: 'https://playpad.app',
    logo: '/images/works/playpad/logo.png',
    title: 'PlayPad',
    description:
      'The fastest and the most cost effective way of investing in crypto.',
  },
]
