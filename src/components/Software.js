import React from 'react';
import SoftwareItem from './SoftwareItem.js'

function Software(){
    return (
        
        <div className="flex flex-wrap w-full pt-10 px-32">
            <SoftwareItem
                name="MQuickPack"
                type="Chrome Extension"
                description="Makes it easier for students to register classes at U of M."
                github=""
                tools="JavaScript"
                classLink="http://soloway.pbworks.com/w/page/133562256/MQuickPack"
            />
            <SoftwareItem
                name="colinfarmer.net"
                type="Personal Website (WIP)"
                description="A React App to show off my video and software projects in style."
                tools="ReactJS Tailwindcss React-Spring"
                github="https://github.com/farmerc0926/colinfarmernet"
            />
            <SoftwareItem
                name="Soggy Cereal"
                type="Website"
                description="Writing so good you'll forget to eat your cereal."
                tools="ReactJS TBD"
                github=""
            />
        </div>
       
        
    )
}

export default Software;