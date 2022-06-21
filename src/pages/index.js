import * as React from 'react'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Posts from '../components/posts'

const IndexPage = () => {

    return (
        <Layout pageTitle="Projects">
            <Posts />
            <Projects />
        </Layout>
    )

}
export default IndexPage