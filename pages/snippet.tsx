import { useState } from 'react'

import { pick } from 'contentlayer/client'
import Link from 'next/link'

import Container from '@components/Container'
import { cn } from '@lib/classNames'
import type { Snippet } from 'contentlayer/generated'

import { allSnippets } from '.contentlayer/generated'

const SnippetPage = ({ posts }: { posts: Snippet[] }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Get all unique categories
  const categories = Array.from(new Set(posts.map(post => post.category)))

  // Filter the posts based on the selected categories
  const filteredPosts = posts.filter(post => {
    if (selectedCategories.length === 0) return true
    return selectedCategories.some(category => post.category === category)
  })

  const categoryPaths = {
    Python:
      'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z',
    JavaScript:
      'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
    Scala:
      'M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z',
  }

  const categoryFill = {}

  return (
    <Container
      back={{
        href: '/',
        label: 'Index',
      }}
    >
      <h1 className='font-semibold text-xl'>Code snippets</h1>
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
      {filteredPosts?.map(post => (
        <Link
          key={post.slug}
          href={`/snippet/${post.slug}`}
          className={cn(
            'flex flex-row justify-between py-2 px-2 -mx-2 rounded-md',
            'hover:bg-gray-200 dark:hover:bg-gray-800',
            'transition-all duration-200'
          )}
        >
          <svg
            className='text-quaternary w-6 h-auto object-cover object-center ml-2'
            viewBox='0 0 25 25'
            fill='currentColor'
          >
            <path
              fill={categoryFill[post.category as keyof typeof categoryFill]}
              d={categoryPaths[post.category as keyof typeof categoryPaths]}
            />
          </svg>
          <span className='flex-grow truncate ml-3 mr-2'>{post.title}</span>
          <span className='text-tertiary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              className='bi bi-arrow-right'
              viewBox='0 0 25 16'
            >
              <path
                fillRule='evenodd'
                d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
              />
            </svg>
          </span>
        </Link>
      ))}
    </Container>
  )
}

export default SnippetPage

export function getStaticProps() {
  const posts = allSnippets
    .map(post => pick(post, ['slug', 'title', 'category', 'publishedAt']))
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
