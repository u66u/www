interface Projects {
  link: string
  logo: string
  title: string
  description: string
}

export const AllProjects: Projects[] = [
  {
    link: 'https://github.com/u66u/axum-elm-portfolio',
    logo: '/images/projects/elm.png',
    title: 'axum-elm-portfolio',
    description:
      'Elm for frontend, Axum for backend CRUD app with blog.',
  },
  {
    link: 'https://github.com/u66u/lotus',
    logo: '/images/projects/lotus.jpg',
    title: 'Lotus',
    description:
      'A machine learning framework for simple neural networks with optimal defaults.',
  },
  {
    link: 'https://github.com/u66u/homeomorphism',
    logo: '/images/projects/homeo.png',
    title: 'Homeomorphism.cpp',
    description:
      ' A simple library/app to check if topological spaces are homeomorphic.',
  },
  {
    link: 'https://github.com/u66u/ch8',
    logo: '/images/projects/chip8.png',
    title: 'CH8',
    description:
      ' chip-8 interpreter',
  },
]
