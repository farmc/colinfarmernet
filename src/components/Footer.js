import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Footer(){
    return(
        <footer className="flex text-xs p-4 absolute bottom-0 w-full justify-between text-white items-center">
            <div className="ml-3">
                &copy; 2021
            </div>
            <div className="flex" >
                <a href="http://www.linkedin.com/in/cfarm" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" className="h-6 w-6 " />
                </a>
                <a href="http://www.github.com/farmerc0926" target="_blank" rel="noopener noreferrer"> 
                    <img src={github} alt="" className="h-6 w-6 ml-3 mr-3" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;