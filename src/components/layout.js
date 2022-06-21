import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {


  const data = useStaticQuery(graphql`
    query {
        allSitePage(filter: {path: {glob: "/blog/**"}}) {
          edges {
            node {
              path
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
  `)



  return (
    <div className="container mx-auto max-w-3xl">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className="text-6xl font-bold text-emerald-800 my-10">{data.site.siteMetadata.title}</header>
      
      <nav>
        <ul className="flex flex-row gap-4 text-emerald-600 mb-8">
          <li className="hover:text-emerald-400">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/about">
              About
            </Link>
          </li>

        </ul>
      </nav>
      <main>
        <h1 className="text-3xl font-bold text mb-4" >{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout