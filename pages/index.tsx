import { Suspense } from 'react'
import { pick } from 'contentlayer/client'
import BlogPostList from '@components/BlogPostList'
import Container from '@components/Container'
import type { Writing } from 'contentlayer/generated'
import LatestProjects from '@components/LatestProjects'
import { allWritings } from '.contentlayer/generated'


const Home = ({ posts }: { posts: Writing[] }) => {
  return (
    <Suspense fallback={null}>
      <Container page={'index'}>
        <header className='flex flex-col gap-16'>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
  <div className="row-span-2   ..."><h1 className='font-semibold text-lg text-secondary'>
              Cristian Crețu
            </h1>
            <h2 className='font-extrabold text-3xl leading-tight max-w-lg'>
              Developer and Designer tinkering with fluid interfaces
            </h2>
            <br></br>
            <p className="text-black dark:text-white sm:text-lg sm:leading-8 pr-6">
            I work at <a className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40" href="https://www.seleri.agency/" rel="noreferrer" target="_blank">Seleri Agency &rarr;</a> and <a className="focusable rounded-sm font-medium text-zinc-800 underline decoration-violet-500 decoration-2 underline-offset-2 transition duration-100 hover:text-violet-500 hover:decoration-violet-500/30 focus:text-violet-500 focus:ring-violet-500/40 dark:text-white dark:decoration-violet-400 dark:hover:text-violet-400 dark:hover:decoration-violet-400/30 dark:focus:text-violet-400 dark:focus:ring-violet-400/40" href="https://www.fabrilab.net/" rel="noreferrer" target="_blank">Caelestis Labs &rarr;</a> <br></br>I am interested in human longevity, math, philosophy, AI, and languages. <br></br> This website is an outlet for my thoughts, ideas, and projects.{' '}

            </p></div>
            <div className='flex flex-col gap-6 leading-7 text-secondary max-w-lg'>
            <p>
              I’m passionate about design and simplicity, with a strong
              attraction towards software, robotics, and engineering. Since the
              start, I’ve focused on improving products by applying knowledge
              that involves a creative process.
            </p>
           
          </div>
  <div className="row-span-6  col-span-2 rounded bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 dark:bg-[url('https://i.ibb.co/nL9p8Gg/Hypercolor-Gradient-2.jpg')]"></div>
</div>

         
       


          
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Recent posts</h3>
            <Suspense fallback={null}>
              <BlogPostList posts={posts} />
              <div></div>
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
