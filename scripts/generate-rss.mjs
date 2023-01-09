import { writeFileSync } from 'fs'

import RSS from 'rss'

import { allWritings } from '../.contentlayer/generated/index.mjs'

async function generate() {
  const feed = new RSS({
    title: 'Max Sekletsov',
    site_url: 'https://sekletsov.xyz',
    feed_url: `https://sekletsov.xyz/feed.xml`,
  })

  allWritings.map(post => {
    feed.item({
      title: post.title,
      url: `https://cretu.dev/writing/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
