import React from 'react';
import SoftwareItem from './SoftwareItem.js'
import mQuickPack from '../images/mquickpack.png'

function Software(){
    return (
        <div className="w-full h-full object-cover">
            <div className="flex flex-wrap w-full">
                <SoftwareItem
                    name="MQuickPack"
                    type="Chrome Extension"
                    description="A Chrome Extension that allows students to easily backpack and register for classes at the Univseristy of Michigan."
                    github=""
                    img={mQuickPack}
                    bgcolor="red-600"
                    textSide="left"
                    classLink="http://soloway.pbworks.com/w/page/133562256/MQuickPack"
                />
                <SoftwareItem
                    name="colinfarmer.net"
                    type="(Work in Progress) Personal Website"
                    description="A React App to show off my video and software projects in style. Utilizes tailwindcss, React-Spring, and Amazon Amplify."
                    github="https://github.com/farmerc0926/colinfarmernet"
                    img=""
                    bgcolor="blue-600"
                    textSide="right"
                />
            </div>
        </div>
        
    )
}

export default Software;