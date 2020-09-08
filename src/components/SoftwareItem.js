import React from 'react';
import github from '../images/github.png'

function SoftwareItem(info){

    return(
        <div className="relative
                        rounded-lg border-dashed border-4 border-gray-500  
                        text-white text-left 
                        w-full md:w-3/12 p-4 md:ml-auto md:mr-auto"
        >
            <div className="font-bold md:text-xl text-teal-400">
                {info.name}
            </div>
            <div className="text-xs pb-4">
                {info.type}
            </div>
            <div className="pb-12">
                {info.description}
            </div>
            
            <div className={"absolute bottom-0 right-0 p-4 " + (info.github === "" ? "hidden" : "")}>
                <a href={info.github} className="">
                    <img src={github} className="block h-4 w-4" alt=""/>
                </a>
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-xs text-orange-400">
                {info.tools}
            </div>
            
            
        </div>
    )
}


export default SoftwareItem;