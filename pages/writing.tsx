import { useState } from 'react'

import { pick } from 'contentlayer/client'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

import Container from '@components/Container'
import { cn } from '@lib/classNames'
import type { Writing } from 'contentlayer/generated'

import { allWritings } from '.contentlayer/generated'

const images = Array.from(
  { length: 6 },
  (_, i) => `/images/blog-icons/${i + 1}.jpg`
)

const WritingPage = ({ posts }: { posts: Writing[] }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get all unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)))

  // Filter the posts based on the selected categories
  const filteredPosts = posts.filter(post => {
    if (selectedCategories.length === 0) return true
    return selectedCategories.some(category => post.category === category)
  })

  return (
    <Container
      back={{
        href: '/',
        label: 'Index',
      }}
    >
      <h1 className='font-semibold text-xl pb-2'>Writing</h1>
      <div className='mb-4'>
        {categories.map(category => (
          <button
            key={category}
            className={cn(
              'text-white py-1.5 px-3 rounded-md mr-2',
              'focus:outline-none focus:shadow-outline',
              selectedCategories.includes(category)
                ? 'bg-slate-200 text-blue-500 dark:bg-gray-600  dark:text-green-300'
                : 'bg-slate-200 dark:bg-gray-800 dark:text-white text-gray-800'
            )}
            onClick={() => {
              if (selectedCategories.includes(category)) {
                setSelectedCategories(
                  selectedCategories.filter(c => c !== category)
                )
              } else {
                setSelectedCategories([...selectedCategories, category])
              }
            }}
          >
            {category}{' '}
            {selectedCategories.includes(category) && (
              <span className='ml-1'> &#x2715;</span>
            )}
          </button>
        ))}
      </div>
      {filteredPosts?.map((post, index) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className={cn(
            'flex flex-row justify-between py-2 px-2 -mx-2 rounded-md',
            'hover:bg-gray-200 dark:hover:bg-gray-800',
            'transition-all duration-200'
          )}
        >
          <img
            src={images[index % 6]}
            alt='Post image'
            className='text-quaternary w-6 h-6 object-cover object-center rounded-full ml-2'
          />
          <span className='flex-grow truncate ml-3 mr-2'>{post.title}</span>
          <span className='text-tertiary flex-shrink-0 hidden lg:block md:block'>
            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
          </span>
        </Link>
      ))}
    </Container>
  )
}

export default WritingPage

export function getStaticProps() {
  const posts = allWritings
    .map(post =>
      pick(post, ['slug', 'title', 'summary', 'category', 'publishedAt'])
    )
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
