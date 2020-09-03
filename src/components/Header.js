import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import HeaderItem from './HeaderItem.js';

function Header(){


    //check location and set text color
    let location = useLocation();
    const [textColor, setTextColor] = useState(String(location.pathname) !== "/" ? 'black' : 'white');

    useEffect(() => {
        if (String(location.pathname) !== "/"){
            setTextColor('black');
        }
        else{
            setTextColor('white');
        }
        
    }, [location.pathname]);

    



    return(
        <header>
            <nav className="p-4">

                {/* left side of nav bar (name, video, software, about)*/}
                <div className="flex items-baseline">

                    <Link 
                        to="/" 
                        className={"font-bold text-xl text-" + textColor + " hover:text-gray-300 ml-4"}
                        onClick={() => setTextColor('white')}
                    >
                        Colin Farmer
                    </Link>
            
                    <div onClick={() => setTextColor('black')} className="pl-8 pr-4">
                        <HeaderItem text="Video" loc="/video" color={textColor} />
                    </div>
                    <div onClick={() => setTextColor('black')} className="px-4">
                        <HeaderItem text="Software" loc="/software" color={textColor} onClick={() => setTextColor('black')} />
                    </div>
                    <div onClick={() => setTextColor('black')} className="px-4">
                        <HeaderItem text="About" loc="/about" color={textColor} onClick={() => setTextColor('black')}/>
                    </div>
                    
                </div>
            </nav>

        </header>
    )
}

export default Header;