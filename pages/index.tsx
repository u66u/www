import { Suspense } from 'react'

import { pick } from 'contentlayer/client'
import Link from 'next/link'
import { AutoScrollingSlider } from '@components/AutoScrollingSlider'
import BlogPostList from '@components/BlogPostList'
import Container from '@components/Container'
import Box from '@components/Work/Ui/Box'
import Layout from '@components/Work/Ui/Layout'
import Section from '@components/Work/Ui/Section'
import { Work } from '@components/Work/Work'
import { works } from '@components/Work/WorkInterface'
import type { Writing } from 'contentlayer/generated'
import { allWritings } from '.contentlayer/generated'
import Projects from '@components/Projects/Projects'

const Home = ({ posts }: { posts: Writing[] }) => {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Container page={'index'}>
          <header className='flex flex-col gap-16'>
            <div className='w-full gap-4'>
              <div className='row-span-2   ...'>
                <div className='gradienta rounded-xl p-5 '>
                  <h1 className='font-semibold text-lg text-white mb-1.5'>
                    Max Sekletsov
                  </h1>
                  <h2 className='font-semibold leading-tight text-lg text-white'>
                    Human longevity, math, philosophy, AI, and languages.
                  </h2>
                </div>
                <br />
                <div className='flex flex-col gap-6 leading-7 '>
                  <div className='text-gray-800 dark:text-slate-200 sm:text-lg sm:leading-8 pr-6'>
                    <p>
                      I work at{' '}
                      <a
                        className='focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40'
                        href='https://www.seleri.agency/'
                        rel='noreferrer'
                        target='_blank'
                      >
                        Seleri Agency
                      </a>{' '}
                      and{' '}
                      <a
                        className='focusable rounded-sm font-medium text-zinc-800 underline decoration-violet-500 decoration-2 underline-offset-2 transition duration-100 hover:text-violet-500 hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40 dark:text-white dark:decoration-violet-400 dark:hover:text-violet-400 dark:hover:decoration-violet-400/30 dark:focus:text-violet-400 dark:focus:ring-violet-400/40'
                        href='https://www.venera.bio/'
                        rel='noreferrer'
                        target='_blank'
                      >
                        Venera Bio
                      </a>
                    </p>
                    <br />{' '}
                    <p>
                      I believe that humans should be able to live for 200
                      years, that&apos;s why I&apos;m learning biology, and
                      experimenting with different aging mechanisms. In my free
                      time, I like to solve math problems and code.{' '}
                    </p>
                    <br />
                    This website is an outlet for my thoughts, ideas, and
                    projects.
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
            <AutoScrollingSlider worksProp={works} />

              <h3 className='font-semibold text-xl'>Recent posts</h3>
              <Suspense fallback={null}>
                <BlogPostList posts={posts} />
                <h2 className='text-xl font-semibold'>Projects</h2>
                <Projects limit={3} />
                <button className='w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                  Dark
                </button>
                <h2 className='mt-2 text-xl font-semibold '>Work</h2>
                <Box className='overflow-hidden'>
                  <Section>
                    <div className='flex flex-col gap-y-16'>
                      {works.slice(0, 3).map((work, idx) => (
                        <Work {...work} key={idx} />
                      ))}
                    </div>
                  </Section>
                </Box>
                <Link href='/work' legacyBehavior>
                  <button className='relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>
                    <span className='relative w-full px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                      See all work
                    </span>
                  </button>
                </Link>
              </Suspense>
            </div>
          </header>
        </Container>
      </Suspense>
    </Layout>
  )
}

export default Home

export function getStaticProps() {
  const posts = allWritings
    .map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return {
    props: {
      posts,
    },
  }
}
