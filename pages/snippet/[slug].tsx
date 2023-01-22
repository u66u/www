import type { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import components from '@components/MDXComponents'
import SnippetLayout from '@components/SnippetLayout'
import { allSnippets, Snippet } from 'contentlayer/generated'

const Post = ({ post }: { post: Snippet }) => {
  const Component = useMDXComponent(post.body.code)

  return (
    <SnippetLayout post={post}>
      <Component
        components={
          {
            ...components,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
      />
    </SnippetLayout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allSnippets.map(
    snippet => `/${snippet._raw.flattenedPath}`
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Snippet | undefined = allSnippets.find(
    snippet => snippet.slug === params?.slug
  )

  return {
    props: {
      post,
    },
  }
}
