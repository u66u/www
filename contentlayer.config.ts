import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { VFile } from 'vfile'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'

export type Toc = {
  value: string
  depth: number
  url: string
}

export const remarkTocHeadings = () => (tree: Parent, file: VFile) => {
  const toc: Toc[] = []

  visit(tree, 'heading', (node: { depth: number }) => {
    const textContent = toString(node)
    toc.push({
      value: textContent,
      url: '#' + slug(toString(node)),
      depth: node.depth,
    })
  })

  file.data.toc = toc
}

export const extractTocHeadings = async (markdown: string): Promise<Toc> =>
  (await remark().use(remarkTocHeadings).process(markdown)).data as any

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'poimandres',
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
    if (node.properties.className) {
      node.properties.className.push('syntax-line')
    } else {
      node.properties.className = ['syntax-line']
    }
  },
  onVisitHighlightedChars(node: any) {
    node.properties.className = ['syntax-word--highlighted']
  },
}

const computedFields: ComputedFields = {
  toc: { type: 'json', resolve: doc => extractTocHeadings(doc.body.raw) },
  readingTime: { type: 'json', resolve: doc => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: doc => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const Writing = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: 'writing/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    category: { type: 'string', required: true },
  },
  computedFields,
}))
const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'snippet/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    category: { type: 'string', required: true },
  },
  computedFields,
}))
const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'project/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    link:  { type: 'string', required: false },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Writing, Snippet, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig
