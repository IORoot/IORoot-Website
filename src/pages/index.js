import * as React from 'react'
import Layout from '../components/layout'
import { 
  useStaticQuery,
  graphql, 
  Link 
} from 'gatsby'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            id
            frontmatter {
                title
                slug
                date(formatString: "MMMM D, YYYY")
            }
        }
        }
    }
  `)

  return (
    <Layout pageTitle="Projects">
        <ul className="flex flex-col gap-4">
            {
                data.allMdx.nodes.map(nodes => (
                    <li key={nodes.id}>
                        <Link className="text-emerald-800 hover:text-emerald-400" to={nodes.frontmatter.slug}>
                            {nodes.frontmatter.title}.
                        </Link>
                        <span> {nodes.frontmatter.date}</span>
                    </li>
                ))
            }
        </ul>
    </Layout>
  )

}
export default IndexPage