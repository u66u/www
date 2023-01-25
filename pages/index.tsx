import { Suspense } from 'react'

import { pick } from 'contentlayer/client'

import BlogPostList from '@components/BlogPostList'
import Container from '@components/Container'
import LatestProjects from '@components/LatestProjects'
import type { Writing } from 'contentlayer/generated'

import { allWritings } from '.contentlayer/generated'

const Home = ({ posts }: { posts: Writing[] }) => {
  return (
    <Suspense fallback={null}>
      <Container page={'index'}>
        <header className='flex flex-col gap-16'>
          <div className='w-full gap-4'>
            <div className='row-span-2   ...'>
              <div className='gradienta rounded-xl p-5 '>
                <h1 className='font-semibold text-lg text-white mb-1.5'>
                  Max Sekletsov
                </h1>

                <h2 className='font-extrabold text-2xl leading-tight text-white'>
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
                      Seleri Agency {'-->'}
                    </a>{' '}
                    and{' '}
                    <a
                      className='focusable rounded-sm font-medium text-zinc-800 underline decoration-violet-500 decoration-2 underline-offset-2 transition duration-100 hover:text-violet-500 hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40 dark:text-white dark:decoration-violet-400 dark:hover:text-violet-400 dark:hover:decoration-violet-400/30 dark:focus:text-violet-400 dark:focus:ring-violet-400/40'
                      href='https://www.venera.bio/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      Venera Bio {'-->'}
                    </a>
                  </p>
                  <br />{' '}
                  <p>
                    I believe that humans should be able to live for 200 years,
                    that&apos;s why I&apos;m learning biology, and experimenting
                    with different aging mechanisms. In my free time, I like to
                    solve math problems and code.{' '}
                  </p>
                  <br />
                  This website is an outlet for my thoughts, ideas, and
                  projects.
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Recent posts</h3>
            <Suspense fallback={null}>
              <BlogPostList posts={posts} />
              <LatestProjects />
            </Suspense>
          </div>
        </header>
      </Container>
    </Suspense>
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
