import { Suspense } from 'react'

import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import Container from '@components/Container'
import { Writing } from 'contentlayer/generated'

interface IWritingLayoutProps {
  children: React.ReactNode
  post: Writing
}

export default function WritingLayout({ post, children }: IWritingLayoutProps) {
  return (
    <Container
      writingNav={post.slug}
      title={`${post.title} - Max Sekletsov`}
      description={post.summary}
      image={`https://sekletsov.xyz/${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type='article'
      page='writing'
    >
      <article className='flex flex-col items-start justify-center w-full max-w-full mt-5 mx-auto'>
        <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
          <div className='flex flex-col w-full lg:mx-20'>
            <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
              {post.title}
            </h1>
            <div className='text-sm flex flex-row gap-2 divide-x divide-gray-300 dark:divide-gray-700 items-center text-secondary'>
              <p>Max Sekletsov</p>
              <p className='pl-2'>
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
              <p className='pl-2'>{post.category}</p>
            </div>
            <p className='pt-3 text-sm text-tertiary min-w-32 md:mt-0'>
              {post.readingTime.text}
            </p>
          </div>
          {post.image && (
            <div className='relative w-full h-96 mt-8 lg:mx-20 '>
              <div className='rounded-lg overflow-hidden'>
                <Image
                  src={post.image}
                  layout='fill'
                  objectFit='cover'
                  alt={`${post.title}`}
                  className='rounded-lg '
                ></Image>
              </div>
            </div>
          )}
        </div>
        <Suspense fallback={null}>
          <div className='w-full my-4 flex items-center justify-center'>
            <div className='prose dark:prose-dark max-w-4xl'>{children}</div>
          </div>
        </Suspense>
      </article>
    </Container>
  )
}
