import * as React from 'react'
import Layout from '../components/layout'
import Posts from '../components/posts'

const IndexPage = () => {

    return (
        <Layout pageTitle="Projects" classes="max-w-3xl mx-4 md:mx-auto mb-10">
            <Posts />
        </Layout>
    )

}
export default IndexPage