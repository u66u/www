import { Suspense } from 'react'

import Container from '@components/Container'
import { Snippet } from 'contentlayer/generated'

interface ISnippetLayoutProps {
  children: React.ReactNode
  post: Snippet
}

const editUrl = (slug: string) =>
  `https://github.com/cristicretu/cretu.dev/edit/main/data/snippet/${slug}.mdx`

export default function SnippetLayout({ post, children }: ISnippetLayoutProps) {
  return (
    <Container
      snippetNav={post.slug}
      title={`${post.title} - Max Sekletsov`}
      date={new Date(post.publishedAt).toISOString()}
      category={post.category}
      type='article'
      page='snippet'
    >
      <article className='flex flex-col items-start justify-center w-full max-w-4xl mt-5 mx-auto'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          {post.title}
        </h1>
        <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
          <div className='text-sm flex flex-row gap-2 divide-x divide-gray-300 dark:divide-gray-700 items-center text-secondary'>
            {post.category}
          </div>
        </div>

        <Suspense fallback={null}>
          <div className='w-full my-4 prose dark:prose-dark max-w-4xl'>
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  )
}
