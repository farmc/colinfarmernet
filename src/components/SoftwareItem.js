import React from 'react';
import github from '../images/github.png'

function SoftwareItem(info){

    return(
        <div className={"m-4 rounded-lg text-white text-left w-full md:w-1/3 p-10 bg-" + info.bgcolor}>
            <div className="font-bold md:text-2xl">
                {info.name}
            </div>
            <div className={"py-2"}>
                {info.description}
            </div>
            
            <div className="">
                <a href={info.github} className="">
                    <img src={github} className="block h-4 w-4" alt=""/>
                </a>
            </div>
            
            
        </div>
    )
}


export default SoftwareItem;