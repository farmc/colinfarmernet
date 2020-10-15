import React from 'react';
import linkedin from '../images/linkedin.png';
import mail from '../images/emailwhite.png'

function About(){
    return (
        <div className="block">
            <div className="w-full h-10"></div>
            <div className="block 
                            md:w-1/2 m-auto  
                            p-16  bg-gray-800">
                <div className="text-white text-2xl text-left">
                    My name is <a className="text-teal-200">Colin Farmer</a>
                    .
                </div>
                <div className="text-white text-left pt-5">
                    I graduated from the 
                    University of Michigan in May 2020 with a B.S. 
                    in Computer Science and Film Television and Media.
                    Send me and email or connect with me on LinkedIn!
                </div>

            </div>
            <div className= "flex justify-center pt-16">
                <a href="http://www.linkedin.com/in/cfarm" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" className="h-12 w-12 m-5" />
                </a>
                <a href="mailto: colincfarmer@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={mail} alt="" className="h-12 w-12 m-5" />
                </a>

            </div>
        </div>
    )
}

export default About;