import Image from 'next/image'
import Link from 'next/link'
import { Work } from '../Work/Work'
import { works } from '../Work/WorkInterface'
import { AllProjects } from './ProjectInterface'

const Projects = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-3 mb-3'>
        {AllProjects.map(work => (
          <Link
            href={`/projects/${work.link}`}
            key={work.title}
            className='flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 dark:bg-transparent dark:border-2 dark:hover:bg-gray-800 border border-transparent hover:bg-gray-200 py-3 rounded-lg transition-all duration-200'
          >
            <img
              src={work.logo}
              width={60}
              height={60}
              alt={work.title}
              className='dark:bg-zinc-800 bg-transparent rounded-md p-1.5'
            />
            <div>
              <h2 className='text-lg tracking-wide mb-1'>{work.title}</h2>
              <div className='text-sm dark:text-zinc-400 text-zinc-600'>
                {work.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Projects
