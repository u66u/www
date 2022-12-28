import Container from '@components/Container'
import Tool from '@components/Tool/Tool'
import { ToolBox } from '@data/tools/ToolBox'

const LatestProjects = () => {
  return (
    
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-xl'>Projects</h1>
        
        <div>
          {/* Lazy */}
          {ToolBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).slice(0, 5).map(tool => (
            <Tool
              key={tool.name}
              name={tool.name}
              description={tool.description}
              svg={tool.svg}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    
  )
}

export default LatestProjects
