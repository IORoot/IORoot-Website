import * as React from 'react'
import { 
  useStaticQuery,
  graphql, 
  Link 
} from 'gatsby'
import SimpleIcon from '../components/simpleIcon'

const Projects = () => {

    const groupedprojects = useStaticQuery(graphql`
    {
        allMdx(
            sort: {fields: [frontmatter___icon, frontmatter___title], order: [ASC,ASC]}
            filter: {frontmatter: {slug: {glob: "/projects*/*"}}}
        ) {
            group(field: frontmatter___icon) {
            fieldValue
            nodes {
                id
                frontmatter {
                    title
                    slug
                    date(formatString: "MMMM D, YYYY")
                    icon
                    desc
                }
                mdxAST
            }
            }
        }
    }

    `)

    function string_to_slug (str) {

        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
    
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc-----";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -/]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
        
        return str;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-10 border-b pb-2" >Projects</h1>

            {
                    groupedprojects.allMdx.group.map( ( groups  => {

                        var nodelist = groups.nodes.map( ( nodes ) => {

                            var svg = "";
                            if (nodes.mdxAST.children){
                                var children = nodes.mdxAST.children;

                                if (Object.values(children)[2]){
                                    var thirdValue = Object.values(children)[2]; 
    
                                    if (thirdValue.hasOwnProperty('value')) {
                                        
                                        if (thirdValue.value.includes("jsdelivr")){
                                            var match = thirdValue.value.match(/"(.*jsdelivr.*?)"/);
                                            var url = match[1]
                                            svg = url.replace(/200px/gi, '100px')
                                        }
                                        
                                    }
                                }
                            }


                            return <li key={nodes.id} className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                                <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to={string_to_slug(nodes.frontmatter.slug)}>

                                    <img className="w-30 mx-auto" src={svg} alt="svg"/>

                                    <div className="w-5/6 mx-auto mb-6">
                                        <div className="mb-2 text-center">{nodes.frontmatter.title}</div>
                                        <div className="text-xs text-green-900">{nodes.frontmatter.desc}</div>
                                    </div>

                                </Link>
                                
                                <div className="flex flex-row gap-3">
                                    <div className="text-slate-500 opacity-40 ml-auto">{nodes.frontmatter.date}</div>
                                    <SimpleIcon className="w-6 opacity-30 " icon={nodes.frontmatter.icon} title={nodes.frontmatter.title} /> 
                                </div>
                                
                            </li>
                        })


                        return <ul className="grid grid-cols-2 gap-4 mb-20">
                                <h2 className="text-2xl border-b col-span-2 capitalize flex flex-row gap-2 pb-2 mb-6"><SimpleIcon icon={groups.fieldValue} /> {groups.fieldValue}</h2>
                                {nodelist}
                        </ul>
                    }))
            }

        </div>
    )

}
export default Projects