interface Work {
  link: string
  logo: string
  title: string
  description: string
  startDate: string
  endDate: string
  slides?: string[][]
}

export const works: Work[] = [
  {
    link: 'https://vocoapp.com',
    logo: '/images/works/voco/logo.png',
    title: 'Voco Inc.',
    description:
      'A mobile platform where users can freely showcase their creativity in organizing events.',
    startDate: '01 Aug 2023',
    endDate: '01 Oct 2023',
    slides: [['/images/works/voco/slide1.png', 'Homepage view of Voco']],
  },
  {
    link: 'https://eren.si/en',
    logo: '/images/works/erensibot/logo.png',
    title: 'ErensiBot',
    description:
      'A Discord bot that is trusted by half a million Discord servers to manage their community.',
    startDate: '01 Apr 2023',
    endDate: '01 Sep 2023',
    slides: [
      ['/images/works/erensibot/slide1.png', 'Dashboard view of ErensiBot'],
      ['/images/works/erensibot/slide2.png', 'ErensiBot features'],
      ['/images/works/erensibot/slide3.png', 'ErensiBot reaction role'],
    ],
  },
  {
    link: 'https://playpad.app',
    logo: '/images/works/playpad/logo.png',
    title: 'PlayPad',
    description:
      'The fastest and the most cost effective way of investing in crypto.',
    startDate: '01 Oct 2022',
    endDate: '01 Apr 2023',
    slides: [['/images/works/playpad/slide1.png', 'Homepage view of PlayPad']],
  },
]
