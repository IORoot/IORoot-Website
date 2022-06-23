import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {


  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)



  return (
    <div className=" max-w-3xl mb-10 mx-4 md:mx-auto">
      
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <div className="flex flex-row gap-4">
        <img alt="logo" className="w-20" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz48c3ZnIHZpZXdCb3g9JzAgMCA2MSAzMicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz48dGl0bGU+SU9Sb290PC90aXRsZT48ZyBpZD0nSU9Sb290Jz48cmVjdCBpZD0nUmVjdGFuZ2xlJyBmaWxsPScjMDAwMDAwJyB4PScyJyB5PScyJyB3aWR0aD0nOCcgaGVpZ2h0PScyOCc+PC9yZWN0Pjxwb2x5Z29uIGlkPSdSZWN0YW5nbGUnIGZpbGw9JyMwMDAwMDAnIHBvaW50cz0nNTAuOTk2NDYxNSAyIDU5LjAwMjQzMDUgMiA1MCAzMCA0MiAzMCc+PC9wb2x5Z29uPjxyZWN0IGlkPSdSZWN0YW5nbGUnIGZpbGw9JyMwMDAwMDAnIHg9JzEyJyB5PScyJyB3aWR0aD0nMjgnIGhlaWdodD0nMjgnPjwvcmVjdD48L2c+PC9zdmc+"></img>
        <header className="text-5xl font-bold text-emerald-800 my-10">{data.site.siteMetadata.title}</header>
      </div>
      

      <nav>
        <ul className="flex flex-row gap-4 text-emerald-600 mb-8">
          <li className="hover:text-emerald-400">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/projects">
              Projects
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
        {children}
      </main>
    </div>
  )
}

export default Layout