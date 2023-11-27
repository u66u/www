import Container from '@components/Container'
import { Work } from '@components/Work/Work'
import { works } from '@components/Work/WorkInterface'

import Layout from '@components/Layout'
import Box from '@components/Work/Ui/Box'
import Section from '@components/Work/Ui/Section'

const Tools = () => {
  return (
    <Layout>
      <Container footer={true}>
        <Box className='overflow-hidden'>
          <Section>
            <h2 className='text-xl font-medium text-theme-heading'>Work</h2>
            <div className='mt-6 flex flex-col gap-y-16'>
              {works.map((work, idx) => (
                <Work {...work} key={idx} />
              ))}
            </div>
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default Tools
