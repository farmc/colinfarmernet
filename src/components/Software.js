import React from 'react';
import SoftwareItem from './SoftwareItem.js'

function Software(){
    return (
        <div className="block">
            <div className="w-full h-10"></div>
            <div className="flex flex-col 
                            md:w-1/2 m-auto  
                            p-16 bg-gray-800"
            >
                <div className="text-teal-200 text-left text-xl md:text-3xl">
                    Here's some of my software projects.
                </div>
                <div className="text-gray-300 text-left py-3">
                    Recently I've been trying to get better at making web apps.
                </div>
                <div className="text-gray-300 text-left text-xs pt-2">
                    Some of my projects are not on GitHub, just contact me!
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-center py-10 px-8 md:px-32">
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
                    type="Website (WIP)"
                    description="Writing so good you'll forget to eat your cereal."
                    tools="ReactJS TBD"
                    github=""
                />
                <SoftwareItem
                    name="Instagram Clone"
                    type="Website"
                    description="Making instagram with client side and server side dynamic pages."
                    tools="ReactJS Python/Flask Jinja SQL"
                    github=""
                />
                <SoftwareItem
                    name="Penitration Testing"
                    type="Security"
                    description="Performed penetration testing on a website to find SQL injection, XSS, and CSRF vulerabilies."
                    tools="SQL JavaScript HTML"
                    github=""
                />
            </div>
        </div>
        
    )
}

export default Software;