import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import GithubLink from '../components/githubLink'
import SimpleIcon from '../components/simpleIcon'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const ProjectPage = ({ data }) => {

  console.log(data)

  var githublink = "https://github.com/IORoot/blog/blob/master/" + data.mdx.slug + "index.mdx" 
  var githubtext = "Comment on GitHub"

  if( data.mdx.frontmatter.repo ) {
    // Switch to sProject REPO link
    githublink = data.mdx.frontmatter.repo
    githubtext = "Visit GitHub Repo"
  }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="blog-post-container"> 
        <div className="blog-post prose">
          <div className="info flex flex-row mb-10 justify-items-center">

            <div className="flex flex-row gap-2 mr-auto bg-slate-100 rounded-full px-4 py-1" >
              <SimpleIcon className="w-4 flex justify-items-center" icon={data.mdx.frontmatter.icon} />
              <div className="capitalize">{data.mdx.frontmatter.icon}</div>
            </div>
          
            <div className="py-1">
              <GithubLink to={githublink}>{githubtext}</GithubLink>
            </div>

          </div>


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
        icon
        repo
      }
    }
  }
`

export default ProjectPage 