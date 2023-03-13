import Container from '@components/Container'
import ProjectGrid from '@components/ProjectGrid'

const images = [
  {
    src: 'https://www.notion.so/front-static/meta/default.png',
    link: 'https://www.example.com',
    title: 'Image 1 Title',
  },
  {
    src: 'https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg',
    link: 'https://www.example.com',
    title: 'Image 2 Title',
  },
  {
    src: 'https://www.raycast.com/api/extension-og?handle=ron-myers&name=terminal',
    link: 'https://www.example.com',
    title: 'Image 3 Title',
  },
  {
    src: 'https://www.raycast.com/api/extension-og?handle=ron-myers&name=terminal',
    link: 'https://www.example.com',
    title: 'Image 3 Title',
  },
  {
    src: '',
    link: 'https://www.example.com',
    title: 'Image 3 Title',
  },
  {
    src: 'https://www.raycast.com/api/extension-og?handle=ron-myers&name=terminal',
    link: 'https://www.example.com',
    title: 'Image 3 Title',
  },
]

const Tools = () => {
  return (
    <Container footer={true}>
      <div className='flex flex-col gap-6'>
        <div>
          <ProjectGrid images={images} />
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
