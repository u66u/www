import BlogPostList from '@components/BlogPostList'
import type { Writing } from 'contentlayer/generated'

const LatestPosts = ({ posts }: { posts: Writing[] }) => {
  return (
    <div>
      <h1>Latest Posts</h1>
      <BlogPostList posts={posts} />
    </div>
  )
}

export default LatestPosts
