import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { defaultSEO } from 'config/seo'

export function SEO() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />

      <Head>
        <link rel='icon' href='/favicons/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/favicons/favicon.svg'
          type='image/svg+xml'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href='/favicons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
      </Head>
    </>
  )
}
