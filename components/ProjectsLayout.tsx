import Image from 'next/image'
import Link from 'next/link'

const ProjectsLayout = () => {
  return (
    <div className='mt-16'>
      <h1 className='font-semibold text-xl'>Projects</h1>
      <br></br>
      <div className='grid grid-cols-8 gap-4'>
        <div className='flex flex-col col-span-8 lg:col-span-4 gap-y-4'>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://glado8.notion.site/Designing-a-Marketplace-for-Notion-8ba5abea314e4620800d282762fcb024'
            >
              <div className='group'>
                <div className='overflow-hidden duration-500 transform cursor-pointer rounded-xl'>
                  <Image
                    className='relative object-cover w-full'
                    src='/images/notion.png'
                    alt='Cover image for playground section'
                    width={1600}
                    height={900}
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </a>
          </div>

          <a
            href='https://www.raycast.com/GLaDO8/pie-for-pi-hole#install'
            className='block lg:hidden'
          >
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/pie-long.png'
                alt='Pie for Pi-hole, a raycast extension'
                width={620}
                height={350}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>
          <div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://jstrieb.github.io/link-lock/#eyJ2IjoiMC4wLjEiLCJlIjoiUURTYkVxMmpmS3Q5SWlnTzF2RjgrQUQzNE80SVFRK1pPSXJrbHgyampPVm1TZnYxNmlEd2Fvd21GUDh4eTZ2V0tKd1lHblIvQ3JkQ012MEtyMklqVnNwOVUrZStYLzFjMDRMcjBEZEFSVllpdEZnRWlKTEhpckwzOGhXaVQza2luUT09IiwiaSI6IklNWmE4cGJiQ3JvY1JsRzMifQ=='
            >
              <div className='group'>
                <div className='overflow-hidden duration-500 transform cursor-pointer rounded-xl'>
                  <Image
                    className='relative object-cover w-full'
                    src='/images/atlan.png'
                    alt='Cover image for playground section'
                    width={900}
                    height={500}
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </a>
          </div>

          <a
            href='https://glado8.notion.site/glado8/An-Amateur-s-Guide-to-Leading-a-Sustainable-Lifestyle-in-India-b5b80a9e97c24ee0bf9c660f75ea9fba'
            className='block lg:hidden'
          >
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/sustain.svg'
                alt='Guide to leading a sustainable lifestyle in india'
                width={620}
                height={350}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>

          <a
            href='https://shreyas.design/writings/dissecting-my-workflow'
            className='block lg:hidden'
          >
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/tools-long.png'
                alt='Article about tools I use'
                width={620}
                height={302}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>
        </div>
        {/* second column */}
        <div className='hidden col-span-4 gap-4 lg:flex lg:flex-col'>
          <a href='https://www.raycast.com/GLaDO8/pie-for-pi-hole#install'>
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/pie.png'
                alt='Pie for Pi-hole, a raycast extension'
                width={360}
                height={493}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>

          <a href='https://shreyas.design/writings/dissecting-my-workflow'>
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/tools.png'
                alt='Article about tools I use'
                width={360}
                height={302}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>

          <a href='https://glado8.notion.site/glado8/An-Amateur-s-Guide-to-Leading-a-Sustainable-Lifestyle-in-India-b5b80a9e97c24ee0bf9c660f75ea9fba'>
            <div className='overflow-hidden rounded-xl bg-slate-800'>
              <Image
                className='relative object-cover'
                src='/images/sustain-long.svg'
                alt='Guide to leading a sustainable lifestyle in india'
                width={100}
                height={50}
                sizes='100vw'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsLayout
