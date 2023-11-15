import { Suspense } from 'react'

import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Toc from './Toc'
import Container from '@components/Container'
import ExternalLink from '@components/ExternalLink'
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

      <article className='flex flex-col md:flex-row items-start justify-center w-full max-w-5xl mt-5 mx-auto'>
        <div className='flex-1 border-r border-gray-300 dark:border-gray-700 pr-4'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
            {post.title}
          </h1>
          <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
            <div className='text-sm flex flex-row gap-2 divide-x divide-gray-300 dark:divide-gray-700 items-center text-secondary'>
              <p>Max Sekletsov</p>
              <p className='pl-2'>
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
              <p className='pl-2'>{post.category}</p>
            </div>
            <p className='mt-2 text-sm text-tertiary min-w-32 md:mt-0'>
              {post.readingTime.text}
            </p>
          </div>
          {post.image && (
            <div className='relative w-full h-96 mt-8'>
              <Image
                src={post.image}
                alt={`${post.title}`}
                className='rounded-lg'
                fill
                sizes='100vw'
                style={{
                  objectFit: 'cover',
                }}
              ></Image>
            </div>
          )}
          <Suspense fallback={null}>

            <div className='w-full my-4 prose dark:prose-dark max-w-5xl'>
              {children}
            </div>
          </Suspense>
        </div>
        <div className='flex-3 pl-4 text-gray-700 dark:text-gray-400 dark:text-opacity-80'>
          <Toc />
        </div>
      </article>
    </Container>
  )
}
