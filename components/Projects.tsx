import { useEffect } from 'react'

import Image from 'next/image'

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
      <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-2 gap-4 text-white '>
        <div className='card row-span-2 min-h-full'>
          <div className='card-content bg-neutral-800 dark:bg-neutral-900'>
            <div className='card-image'>
              <Image
                alt=''
                src='/images/22.png'
                layout='fill'
                className='absolute top-0 object-center w-3/5 sm:w-80% h-auto pt-auto sm:pt-16 opacity-40'
              />
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <div className='card-info-title pt-0 sm:pt-52'>
                  <h3>Apartments</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-content bg-neutral-800 dark:bg-neutral-900'>
            <div className='card-image'>
              <Image
                alt=''
                src='/images/111.png'
                layout='fill'
                className='absolute top-0 object-center w-3/5 h-auto mt-8'
              />
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <div className='card-info-title'>
                  <h3>test</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card row-span-1 min-h-full'>
          <div className='card-content bg-neutral-800 dark:bg-neutral-900'>
            <div className='card-image'>
              <Image
                alt=''
                src='/images/111.png'
                layout='fill'
                className='absolute top-0 object-center w-3/5 h-auto mt-8'
              />
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <div className='card-info-title'>
                  <h3>Apartments</h3>
                  <h4>Places to be apart. Wait, what?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card row-span-1'>
          <div className='card-content bg-neutral-900'>
            <div className='card-image'>
              <i className='fa-duotone fa-person-to-portal'></i>
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <i className='fa-duotone fa-person-to-portal'></i>
                <div className='card-info-title'>
                  <h3>Adios</h3>
                  <h4>See you...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card row-span-1'>
          <div className='card-content bg-neutral-900'>
            <div className='card-image'>
              <i className='fa-duotone fa-person-from-portal'></i>
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <i className='fa-duotone fa-person-from-portal'></i>
                <div className='card-info-title'>
                  <h3>I mean hello</h3>
                  <h4>...over here.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card row-span-1'>
          <div className='card-content bg-neutral-900'>
            <div className='card-image'>
              <i className='fa-duotone fa-otter'></i>
            </div>
            <div className='card-info-wrapper'>
              <div className='card-info'>
                <i className='fa-duotone fa-otter'></i>
                <div className='card-info-title'>
                  <h3>Otters</h3>
                  <h4>Look at me, imma cute lil fella.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
