import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const ProjectPage = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="blog-post-container"> 
        <div className="blog-post prose">

          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          
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