import * as React from 'react'
import { 
  useStaticQuery,
  graphql, 
  Link 
} from 'gatsby'
import SimpleIcon from '../components/simpleIcon'

const Posts = () => {

  const posts = useStaticQuery(graphql`
  query {
        allMdx(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {frontmatter: {slug: {glob: "/posts*/*"}}}
        ) {
        nodes {
            id
            frontmatter {
                title
                slug
                date(formatString: "MMMM D, YYYY")
                icon
            }
        }
        }
    }
  `)

  return (
    <div>
        <h1 className="text-4xl font-bold text-slate-800 mb-6 border-b pb-2" >Posts</h1>
        <ul className="flex flex-col gap-4 mb-20">
            {
                posts.allMdx.nodes.map(nodes => (
                    <li key={nodes.id}>
                        <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-row gap-2" to={nodes.frontmatter.slug}>
                            <SimpleIcon icon={nodes.frontmatter.icon} />
                            {nodes.frontmatter.title}.
                        </Link>
                        <div className="text-slate-500 opacity-40 ml-10">{nodes.frontmatter.date}</div>
                    </li>
                ))
            }
        </ul>
    </div>
  )

}
export default Posts