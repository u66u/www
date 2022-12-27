import { Suspense } from 'react'

import { pick } from 'contentlayer/client'
import type { NextPage } from 'next'

import BlogPostList from '@components/BlogPostList'
import Container from '@components/Container'
import { MemoizedEndeavors } from '@components/Endeavors'
import { endeavorsList } from '@data/endeavors/endeavorsItems'
import type { Writing } from 'contentlayer/generated'

import { allWritings } from '.contentlayer/generated'

const Home = ({ posts }: { posts: Writing[] }) => {
  return (
    <Suspense fallback={null}>
      <Container page={'index'}>
        <header className='flex flex-col gap-16'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-lg text-secondary'>
              Cristian Crețu
            </h1>
            <h2 className='font-extrabold text-5xl leading-tight max-w-lg'>
              Developer and Designer tinkering with fluid interfaces
            </h2>
          </div>
          <div className='flex flex-col gap-6 leading-7 text-secondary max-w-lg'>
            <p>
              I’m passionate about design and simplicity, with a strong
              attraction towards software, robotics, and engineering. Since the
              start, I’ve focused on improving products by applying knowledge
              that involves a creative process.
            </p>
            <p>
              Striving towards unique experiences that feel magical and that
              give a blissful feeling. Unlimitedly obsessed with solving
              problems where design and engineering intersect by creating
              pixel-perfect, polished interfaces.
            </p>
            <p>
              Ardent in reading, writing, and improving consistently through
              learning. Currently interested in C and TypeScript. Curious about
              native apps with Swift.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Recent endeavors</h3>
            <Suspense fallback={null}>
              <BlogPostList posts={posts} />
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
