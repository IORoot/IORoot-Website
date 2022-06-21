import React from "react"
import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import GithubLink from '../components/githubLink'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const ProjectPage = ({ data }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="blog-post-container"> 
        <div className="blog-post prose">
          
          <GithubLink to={data.mdx.slug}>Comment on GitHub</GithubLink>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>

        </div>
      </div>
    </Layout>
  )
  
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      slug
      body
      frontmatter {
        date
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectPage 