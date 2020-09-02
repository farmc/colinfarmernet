import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import HeaderItem from './HeaderItem.js';

function Header(){


    //check location and set text color
    let location = useLocation();
    const [textColor, setTextColor] = useState(String(location.pathname) !== "/" ? 'black' : 'white');

    



    return(
        <header>
            <nav className="p-4 flex justify-between items-center">

                {/* left side of nav bar (name, video, software, about)*/}
                <div className="flex items-center">

                    <Link 
                        to="/" 
                        className={"font-bold text-xl text-" + textColor + " hover:text-gray-300 ml-4"}
                        onClick={() => setTextColor('white')}
                    >
                        Colin Farmer
                    </Link>
            
                    <button onClick={() => setTextColor('black')} className="pl-8 pr-4">
                        <HeaderItem text="Video" loc="/video" color={textColor} />
                    </button>
                    <button onClick={() => setTextColor('black')} className="px-4">
                        <HeaderItem text="Software" loc="/software" color={textColor} onClick={() => setTextColor('black')} />
                    </button>
                    <button onClick={() => setTextColor('black')} className="px-4">
                        <HeaderItem text="About" loc="/about" color={textColor} onClick={() => setTextColor('black')}/>
                    </button>
                    
                </div>
            </nav>

        </header>
    )
}

export default Header;