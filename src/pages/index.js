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
        <h1 className="text-4xl font-bold text-slate-800 mb-6 border-b pb-2" >Posts</h1>
        <ul className="flex flex-col gap-4">
            {
                data.allMdx.nodes.map(nodes => (
                    <li key={nodes.id}>
                        <Link className="text-emerald-800 hover:text-emerald-400 text-2xl" to={nodes.frontmatter.slug}>
                            {nodes.frontmatter.title}.
                        </Link>
                        <div className="text-slate-500 opacity-40">{nodes.frontmatter.date}</div>
                    </li>
                ))
            }
        </ul>
    </Layout>
  )

}
export default IndexPage