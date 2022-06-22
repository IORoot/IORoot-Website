import * as React from 'react'
import * as Icons from 'simple-icons/icons';

const SimpleIcon = ({ icon, className }) => { 

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