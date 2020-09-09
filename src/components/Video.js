import React from 'react';
import VideoObject from './VIdeoObject.js';
import ghosts from '../images/Ghosts.jpg';
import oneSmallStep from '../images/OneSmallStep.jpg';
import whatIs from '../images/Whatis.jpg';
import {useSpring, animated} from 'react-spring';

function Video(){

    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {mass: 10}
    });

    return (
        <animated.div style={fade}>
            <div className="block items-center">
                
                <div className="">
                    <VideoObject 
                        title="I Don't Believe in Ghosts"
                        role="Creator"
                        description="A short film about the horrors of being alone in the dark."
                        textSide="left"
                        link="https://drive.google.com/file/d/1ad0SbX0xpgIMPdUv-w2Lru5mbdYbaMpU/view?usp=sharing"
                        img={ghosts}
                    />
                    <VideoObject 
                        title="What Is and What Should Never Be"
                        role="Co-Writer/Director"
                        description="After getting a gig at a college party, a high school band discovers a secret in the depths of a fraternity basement."
                        textSide="right"
                        link="https://vimeo.com/330354019"
                        img={whatIs}
                    />
                    <VideoObject 
                        title="One Small Step"
                        role="Creator"
                        description="An astronaut lands at The University of Michigan."
                        textSide="left"
                        link="https://drive.google.com/file/d/1AIrcQ-B8L0v14Fz_X02ia868E3eSjJiq/view?usp=sharing"
                        img={oneSmallStep}
                    />
                
                </div>

            </div>
        </animated.div>
    )
}

export default Video;
