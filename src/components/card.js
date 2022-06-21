import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Svg from './svg'

const Card = () => {

    const data = useStaticQuery(graphql`
        query {
            allVersions(sort: {fields: title}) {
                group(field: category) {
                edges {
                    node {
                    id
                    colour1
                    colour2
                    company
                    date
                    category
                    link
                    logo_url
                    title
                    version
                    }
                }
                }
            }
        }
    `)

    return ( 
        <div className="text-emerald-800">
            <div className="grid grid-cols-4 gap-4">

            {

                data.allVersions.group.map((group,index) => {
                    
                        var groups = group.edges.map(nodes => (

                            <a href={nodes.node.link} target="_blank" rel="noreferrer" style={{fill: nodes.node.colour1, backgroundColor: nodes.node.colour2}} className="hover:shadow-xl hover:border-2 hover:border-emerald-200 rounded flex flex-col gap-2 p-2 shadow-sm no-underline" key={nodes.node.id}>
                                <div className="m-auto text-center" style={{color: nodes.node.colour1}}>{nodes.node.company}</div>
                                <Svg className="p-8">{nodes.node.logo_url}</Svg>
                                <div className="m-auto text-center" style={{color: nodes.node.colour1}}>{nodes.node.title}</div>
                                <div className="rounded text-center" style={{backgroundColor: nodes.node.colour1, color: nodes.node.colour2}}>{nodes.node.version}</div>
                            </a>
                        ))

                        groups.unshift(<div className="text-3xl col-span-4 border-b mt-20" key={index}>{group.edges[0].node.category}</div>);

                        return groups;
                    }
                )

            }

            
            </div>
        </div> 
    )
}

export default Card