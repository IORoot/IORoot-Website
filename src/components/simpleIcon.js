import * as React from 'react'
import * as Icons from 'simple-icons/icons';

const SimpleIcon = ({ icon, title, className }) => { 


    // Manual Substitutions
    if (icon === 'css' ){ icon = "css3" }
    if (icon === 'html' ){ icon = "html5" }

    // Substitutions based on title
    if (typeof title !== 'undefined') {
        if (title.startsWith('wp')){ icon = "wordpress" }
        if (title.startsWith('macos')){ icon = "apple" }
    }



    if (!icon){  return ("") }
    if (!className){  className = ("w-8") }
    
    var capitalized = icon.charAt(0).toUpperCase() + icon.slice(1);
    var simpleIconName = "si"+capitalized

    const SimpleIcon = Icons[simpleIconName]

    if (SimpleIcon === undefined || SimpleIcon === null){  return ("") }

    return (
        <div className={ className } style={{"fill": "#"+SimpleIcon.hex}}
            dangerouslySetInnerHTML={{__html: SimpleIcon.svg}}
        /> 
    )
}



export default SimpleIcon