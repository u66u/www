import Container from '@components/Container'
import { Work } from '@components/Work/Work'
import { works } from '@components/Work/WorkInterface'

import Projects from '../components/Projects'

const Tools = () => {
  return (
    <Container footer={true}>
      <div className='flex flex-col gap-6'>
        <div>
          <Projects />
        </div>
        <div className='mt-6 flex max-w-screen-xl mx-auto flex-col gap-y-16'>
                      {works.map((work, idx) => (
                        <Work {...work} key={idx} />
                      ))}
                    </div>
      </div>
    </Container>
  )
}

export default Tools