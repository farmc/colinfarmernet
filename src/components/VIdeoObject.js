import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring';
//5934

function VideoObject(info){

    const[showText, setShowText] = useState(false);

    const transLeft = useTransition(showText, null, {
        from: {opacity: 0, transform: 'translateX(100%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
        leave: {opacity: 0, transform: 'translateX(100%)'},
    });

    const transRight = useTransition(showText, null, {
        from: {opacity: 0, transform: 'translateX(-100%)'},
        enter: {opacity: 1, transform: 'translateX(0%)'},
        leave: {opacity: 0, transform: 'translateX(-100%)'},
    });
    
    

    return(
        <div 
            className={"relative text-white text-" + info.textSide + ""} 
            onMouseOver={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)} 
        >
            <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img 
                    src={info.img} 
                    alt="" 
                    style={{zIndex: '-1'}} 
                    className=""
                />
            
            { info.textSide === "left" &&
                
                    transLeft.map(({item, key, props}) =>
                        item&&
                        <animated.div
                            key={key}
                            style={props}
                            className={"block absolute top-0 " + info.textSide + "-0 px-10 py-10 z-10 w-7/12"}
                        >
                            {/*<div className="">*/}
                                <div className="text-4xl font-bold">
                                    {info.title}
                                </div>
                                <div className="">
                                    Role: {info.role}
                                </div>
                                <div className="text-xl pt-2" >
                                    {info.description}
                                </div>
                            {/*</div>*/}
                        </animated.div>
                    )
                
            }

            { info.textSide === "right" &&
                
                    transRight.map(({item, key, props}) =>
                        item&&
                        <animated.div
                            key={key}
                            style={props}
                            className={"block absolute top-0 " + info.textSide + "-0 px-10 py-10 z-10 w-7/12"}
                        >
                            {/*<div className="">*/}
                                <div className="text-4xl font-bold">
                                    {info.title}
                                </div>
                                <div className="">
                                    Role: {info.role}
                                </div>
                                <div className="text-xl pt-2" >
                                    {info.description}
                                </div>
                            {/*</div>*/}
                        </animated.div>
                    )
                
            }
            

            </a>
            
            
            
            
            

        </div>
    )
}

export default VideoObject;