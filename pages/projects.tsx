import Projects from '@components/Projects/Projects'
import Layout from '@components/Work/Ui/Layout'
import Section from '@components/Work/Ui/Section'
import Container from '@components/Container'
import Box from '@components/Work/Ui/Box'

const ProjectPage = () => {
  return (
    <Layout>
      <Container
        back={{
          href: '/',
          label: 'Index',
        }}
      >
        <Box className='overflow-hidden'>
          <Section>
            <h2 className='mt-2 text-xl font-semibold mb-4'>Projects</h2>
            <Projects />
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default ProjectPage
