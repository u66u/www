import { useState } from 'react'
import { pick } from 'contentlayer/client'
import Link from 'next/link'
import Container from '@components/Container'
import { cn } from '@lib/classNames'
import type { Project } from 'contentlayer/generated'
import { allProjects } from '.contentlayer/generated'

const images = Array.from({length: 6}, (_, i) => `/images/projects/${i + 1}.png`);

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])

  const toggleAccordion = (id: string) => {
    if (selectedProjects.includes(id)) {
      setSelectedProjects(selectedProjects.filter(projectId => projectId !== id))
    } else {
      setSelectedProjects([...selectedProjects, id])
    }
  }

  return (
    <Container
      back={{
        href: '/',
        label: 'Index',
      }}
    >
      <h1 className='font-semibold text-xl pb-2'>Projects</h1>
      <div className='mb-4 max-w-3xl'>
        {projects.map((project, index) => (
          <div key={project._id}>
            <button
              className={cn(
                'flex flex-row justify-between py-2 px-2 -mx-2 rounded-md w-full',
                'hover:bg-gray-200 dark:hover:bg-gray-800',
                'transition-all duration-200'
              )}
              onClick={() => toggleAccordion(project._id)}
            >
              <img
                src={images[index % images.length]}
                alt='Project image'
                className='text-quaternary w-12 h-12 object-cover object-center rounded-full ml-2'
              />
              <span className='flex-grow truncate ml-3 mr-2'>{project.title}</span>
            </button>
            {selectedProjects.includes(project._id) && (
              <div className='flex mt-4'>
                <img src={project.image} alt='Project image' className='w-1/2' />
                <div className='ml-4'>
                  <h2 className='text-2xl font-bold'>{project.title}</h2>
                  <p className='mt-2'>{project.description}</p>
                  {project.link && (
                    <Link href={project.link}>
                      <a className='mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded'>Visit</a>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ProjectPage

export function getStaticProps() {
  const projects = allProjects
    .map(project =>
      pick(project, ['_id', 'title', 'description', 'image', 'link'])
    )

  return {
    props: {
      projects,
    },
  }
}
