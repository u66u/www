import Container from '@components/Container'

import Projects from '../components/Projects'

const Tools = () => {
  return (
    <Container footer={true}>
      <div className='flex flex-col gap-6'>
        <div>
          <Projects />
        </div>
      </div>
    </Container>
  )
}

export default Tools