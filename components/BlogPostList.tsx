import { pick } from 'contentlayer/client'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

import { cn } from '@lib/classNames'
import type { Writing } from 'contentlayer/generated'

import { allWritings } from '.contentlayer/generated'

const images = [
  'https://static.vecteezy.com/system/resources/previews/002/976/238/original/holographic-gradient-abstract-background-free-vector.jpg  ',
  'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4=',
  'https://unblast.com/wp-content/uploads/2020/05/Gradient-Abstract-Textures-1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-8zBkLXGYwsP9s2YCtvHPYNWVsnDrL-_OnahotAAUZ2m-JI6TierxFNLmh1pOx6yXEo&usqp=CAU',
  'https://img.rawpixel.com/private/static/images/website/2022-05/v904-nunny-016_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d04dc64ebef3b6c3ad40a5687bbe31dc',
  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOkr_d_R14CLHfk9l_Dq3bjCOjm5U3_e-mPEkpzpg_wdsv2Wli',
]

const BlogPostList = ({ posts }: { posts: Writing[] }) => {
  return (
    <div>
      {posts?.slice(0, 5).map((post, index) => (
        (<Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className={cn(
            'flex flex-row justify-between py-2.5 px-2 -mx-2 rounded-md border-gray-200 dark:border-gray-800',
            'hover:bg-gray-200 dark:hover:bg-gray-800',
            'transition-all duration-200'
          )}>

          <img
            src={images[index % 6]}
            alt='Post image'
            className='text-quaternary w-6 h-6 object-cover object-center rounded-full '
          />
          <span className='flex-grow truncate ml-3 mr-2'>{post.title}</span>
          <span className='text-tertiary flex-shrink-0 hidden lg:block md:block'>
            {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
          </span>

        </Link>)
      ))}
      <br></br>
      <Link href='/writing' legacyBehavior>
        <button className='relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'>
          <span className='w-full relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            View more
          </span>
        </button>
      </Link>
    </div>
  );
}

export default BlogPostList

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
