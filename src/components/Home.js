/* Home Screen */
import React from 'react';
import bvid from '../videos/background.mp4'

function Home(){
    return (
        <div>
            <div className="absolute inset-0" style={{zIndex: '-1'}}>
                <video src={bvid} type="video/mp4" 
                autoPlay loop muted 
                className="w-full h-full object-cover"
                
                />
                
            </div>
            
        </div>
        
        
    )
}
export default Home;