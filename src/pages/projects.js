import * as React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectPage = () => {

    return (
        <Layout pageTitle="Projects" classes="max-w-3xl mx-4 md:mx-auto mb-10">
            <Projects />
        </Layout>
    )

}
export default ProjectPage