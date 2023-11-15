import { useEffect } from 'react'
import tocbot from 'tocbot'

export default function Toc() {
  useEffect(() => {
    tocbot.refresh()
    tocbot.init({
      tocSelector: '.js-toc', // Select the wrapper of toc
      contentSelector: '.js-toc-content', // Select the warpper of contents
      headingSelector: 'h1, h2, h3', // Choose the heading tags
      // hasInnerContainers: true,
    })
    return () => tocbot.destroy()
  }, [])

  return (
    <div>
      <span>Table of Contents:</span>
      <div className='sticky top-0'>
        <div className='js-toc mt-2 ml-2'></div>
      </div>
    </div>
  )
}
