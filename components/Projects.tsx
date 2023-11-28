import { useEffect } from 'react'

import Image from 'next/image'

interface CardProps {
  title: string
  subtitle: string
  image?: string
  type?: 'default' | 'fullHeight' | 'fullWidth'
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  type = 'default',
}) => {
  let cardClass = 'card'
  if (type === 'fullHeight') {
    cardClass = 'card row-span-2 min-h-full'
  } else if (type === 'fullWidth') {
    cardClass = 'card col-span-2 min-w-full'
  }

  return (
    <div className={cardClass}>
      <div className='card-content bg-neutral-800 dark:bg-neutral-900'>
        {image && (
          <div className='card-image'>
            <Image
              alt=''
              src={image}
              className='absolute top-0 object-center w-3/5 sm:w-80% h-auto pt-auto sm:pt-16 opacity-40'
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        )}
        <div className='card-info-wrapper'>
          <div className='card-info '>
            <div className='card-info-title'>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = Array.from(document.getElementsByClassName('card'))
      for (const card of cards) {
        if (card instanceof HTMLElement) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div id='cards '>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 text-white'>
        <Card
          title='Apartments'
          image='/images/gif.gif'
          subtitle='Places to be apart. Wait, what?'
          type='fullHeight'
        />
        <Card
          title='test'
          image='/images/pie-long.png'
          subtitle='Places to be apart. Wait, what?'
        />
        <Card title='Apartments' subtitle='Places to be apart. Wait, what?' />
        <Card title='test' subtitle='Places to be apart. Wait, what?' />

        <Card title='test' subtitle='Places to be apart. Wait, what?' />
        <Card
          title='test'
          subtitle='Places to be apart. Wait, what?'
          image='/images/pie-long.png'
          type='fullWidth'
        />
      </div>
    </div>
  )
}

export default Projects
