import Container from '@components/Container'
import ProjectsLayout from '@components/ProjectsLayout'

const Tools = () => {
  return (
    <Container footer={true}>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2 text-secondary'>
          <p>A congruence of theory and practice</p>
        </div>

        <div>
          <ProjectsLayout />
        </div>
      </div>
    </Container>
  )
}

export default Tools

// Sort by name
// const Tools = () => {
//   return (
//     <Container footer={false}>
//       <div className='flex flex-col gap-6'>
//         <h1 className='font-semibold text-xl'>Projects</h1>
//         <div className='flex flex-col gap-2 text-secondary'>
//           <p>
//             Those are the apps that I use almost daily, and that help me deliver
//             my work.
//           </p>
//           <p>
//             The list is small & simple as I like being minimal and intentional
//             with the things I use.
//           </p>
//         </div>

//         <div>
//           {/* Lazy */}
//           {ToolBox.sort((a, b) => {
//             if (a.name < b.name) {
//               return -1
//             }
//             if (a.name > b.name) {
//               return 1
//             }
//             return 0
//           }).map(tool => (
//             <Tool
//               key={tool.name}
//               name={tool.name}
//               description={tool.description}
//               svg={tool.svg}
//               link={tool.link}
//             />
//           ))}
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default Tools
