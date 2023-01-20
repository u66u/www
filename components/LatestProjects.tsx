import Link from 'next/link'

import Tool from '@components/Tool/Tool'
import { ToolBox } from '@data/tools/ToolBox'

const customSortOrder = ['Linear', 'Safari', 'Figma']

// Create a Set from the custom sort order array to make searching faster
const customSortOrderSet = new Set(customSortOrder)

const LatestProjects = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='font-semibold text-xl'>Projects</h1>

      <div>
        {/* Lazy */}
        {ToolBox.sort((a, b) => {
          if (
            customSortOrderSet.has(a.name) &&
            customSortOrderSet.has(b.name)
          ) {
            // Both elements are in the custom sort order, sort based on the order in the customSortOrder array
            return (
              customSortOrder.indexOf(a.name) - customSortOrder.indexOf(b.name)
            )
          } else if (customSortOrderSet.has(a.name)) {
            // Only a is in the custom sort order, a comes before b
            return -1
          } else if (customSortOrderSet.has(b.name)) {
            // Only b is in the custom sort order, b comes before a
            return 1
          } else {
            // Neither a nor b is in the custom sort order, sort based on name
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }
        })
          .slice(0, 3)
          .map(tool => (
            <Tool
              key={tool.name}
              name={tool.name}
              description={tool.description}
              svg={tool.svg}
              link={tool.link}
            />
          ))}
        <Link href='/projects'>
          <button className='relative w-full inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'>
            <span className='relative w-full px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              See all projects
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LatestProjects
