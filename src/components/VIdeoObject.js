import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

function VideoObject(info){

    //state and spring for text fade in
    const[showText, setShowText] = useState(false);

    const fade = useSpring({
        opacity: showText ? 1 : 0
    })


    //movie info for desktop and mobile devices
    let movieInfo = 
        <div className={"block absolute top-0 " + info.textSide + "-0 px-10 py-10 z-10 w-7/12"}>
            <div className="text-4xl font-bold">
                {info.title}
            </div>
            <div className="">
                Role: {info.role}
            </div>
            <div className="text-xl pt-2" >
                {info.description}
            </div>
        </div>

    let mobileMovieInfo = 
        <div className={"block absolute top-0 " + info.textSide + "-0 px-3 py-2 z-10 w-full"}>
            <div className="font-bold">
                {info.title}
            </div>
            <div className="text-xs">
                Role: {info.role}
            </div>
            <div className="text-xs" >
                {info.description}
            </div>
        </div>

    return(
        <div 
            className={"text-white text-" + info.textSide + " relative"} 
            onMouseOver={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)} 
        >
            <a href={info.link} target="_blank" rel="noopener noreferrer" className="">
                <img 
                    src={info.img} 
                    alt="" 
                    style={{zIndex: '-1'}} 
                    className="object-contain w-full"
                />

                <animated.div className="hidden md:block absolute top-0 w-full" style={fade}>
                    {movieInfo}
                </animated.div>

                <div className="md:hidden w-full absolute top-0">
                    {mobileMovieInfo}
                </div>
            </a>
        </div>
    )
}

export default VideoObject;