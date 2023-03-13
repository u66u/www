import React from 'react'

interface Image {
  src: string
  link: string
  title: string
}

interface Props {
  images: Image[]
}

const gradients = [
  'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-teal-600 via-orange-300 to-zinc-400',
  'bg-gradient-to-br from-cyan-200 via-pink-500 to-cyan-700',
  'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-900 via-lime-400 to-slate-300',
  'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-cyan-200 to-stone-800',
  'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
  'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-700 via-violet-300 to-pink-200',
]

const ProjectGrid: React.FC<Props> = ({ images }) => {
  const getGradient = (index: number) => {
    return gradients[index % gradients.length]
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          className={`relative h-64 rounded-lg overflow-hidden ${getGradient(
            index
          )}`}
        >
          <div className='absolute inset-x-0 top-0 p-4'>
            <p className='text-lg text-white font-bold'>{image.title}</p>
          </div>
          <img
            src={image.src}
            className='absolute bottom-0 right-0 object-center w-2/3 h-auto rounded-tl-lg'
          />
        </a>
      ))}
    </div>
  )
}

export default ProjectGrid
