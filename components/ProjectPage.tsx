import { useState } from 'react'
import { pick } from 'contentlayer/client'
import Link from 'next/link'
import Container from '@components/Container'
import { cn } from '@lib/classNames'
import type { Project } from 'contentlayer/generated'
import { allProjects } from '.contentlayer/generated'

const ProjectPage = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setSelectedProject(selectedProject === id ? null : id)
  }

  return (
    <Container
      back={{
        href: '/',
        label: 'Index',
      }}
    >
      <h1 className='font-semibold text-xl'>Projects</h1>
      <div className='mb-4'>
        {projects.map((project, index) => (
          <div key={project._id}>
            <button
              className={cn(
                'text-white py-1.5 px-3 rounded-md mr-2',
                'focus:outline-none focus:shadow-outline',
                selectedProject === project._id
                  ? 'bg-slate-200 text-blue-500 dark:bg-gray-600  dark:text-green-300'
                  : 'bg-slate-200 dark:bg-gray-800 dark:text-white text-gray-800'
              )}
              onClick={() => toggleAccordion(project._id)}
            >
              {project.title}
            </button>
            {selectedProject === project._id && (
              <div className='flex'>
                <img src={project.image} alt='Project image' className='w-1/4' />
                <div className='ml-4'>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {project.link && (
                    <Link href={project.link}>
                      <a>Visit</a>
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
