'use client'
import { FC, useState } from 'react'
import styles from '@css/toc.module.css'
import { Writing } from 'contentlayer/generated'
import useWindowSize, { Size } from './UseWindowSize'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export type TOC = { toc: { value: string; url: string; depth: number }[] }

const TOC: FC<Writing> = ({ toc }) => {
  const [open, setOpen] = useState(false)
  const size: Size = useWindowSize()

  const depthToMargin = (depth: number) => {
    switch (depth) {
      case 2:
        return 10
      case 3:
        return 20
      case 4:
        return 30
    }
  }

  if (typeof size.width === 'number') {
    if (size.width <= 768)
      return (
        <div
          className={styles.accordion}
          aria-expanded={open}
          aria-controls='sect1'
        >
          <button
            className='w-full dark:bg-gray-800 bg-opacity-80 bg-gray-300 p-3 rounded-md'
            onClick={() => setOpen(o => !o)}
          >
            <div className='flex items-center'>
              <h2 className='mr-2'>Contents</h2>
              <FiChevronDown />
            </div>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.nav
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
              >
                <ol>
                  {(toc as TOC).toc.map((data, index) => (
                    <li
                      key={index}
                      className={styles.list}
                      style={{ marginLeft: depthToMargin(data.depth) }}
                      aria-labelledby={data.value}
                    >
                      <a href={data.url} id='sect1'>
                        {data.value}
                      </a>
                    </li>
                  ))}
                </ol>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      )
    else
      return (
        <div className={styles.toc}>
          <h2>Contents</h2>
          <nav>
            <ol>
              {(toc as TOC).toc.map((data, index) => (
                <li
                  key={index}
                  className={styles.list}
                  style={{ marginLeft: depthToMargin(data.depth) }}
                >
                  <a href={data.url}>{data.value}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )
  }

  return null
}

export default TOC
