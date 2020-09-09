import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';
//5934

function VideoObject(info){

    const[showText, setShowText] = useState(false);

    const transLeft = useTransition(showText, null, {
        from: {opacity: 0, transform: 'translateX(0%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
        leave: {opacity: 0, transform: 'translateX(0%)'},
    });

    const transRight = useTransition(showText, null, {
        from: {opacity: 0, transform: 'translateX(0%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
        leave: {opacity: 0, transform: 'translateX(0%)'},
    });
    
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
            
                { info.textSide === "left" &&
                    
                        transLeft.map(({item, key, props}) =>
                            item&&
                            <animated.div
                                key={key}
                                style={props}
                                className="hidden md:block absolute top-0 w-full"  
                            >
                                {movieInfo}
                            </animated.div>
                        )
                    
                }


                { info.textSide === "right" &&
                    
                        transRight.map(({item, key, props}) =>
                            item&&
                            <animated.div
                                key={key}
                                style={props}
                                className="hidden md:block absolute top-0 w-full"
                            >
                                {movieInfo}
                            </animated.div>
                        )
                    
                }

                <div className="md:hidden w-full absolute top-0">
                    {mobileMovieInfo}
                </div>
            </a>
        </div>
    )
}

export default VideoObject;