// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allWritings from './Writing/_index.json' assert { type: 'json' }
import allSnippets from './Snippet/_index.json' assert { type: 'json' }

export { allWritings, allSnippets }

export const allDocuments = [...allWritings, ...allSnippets]


