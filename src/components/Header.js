import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import HeaderItem from './HeaderItem.js';
import menuwhite from '../images/menuwhite.png'
import menublack from '../images/menublack.png'

function Header(){


    //check location and set text color
    let location = useLocation();
    const [textColor, setTextColor] = useState(String(location.pathname) !== "/" ? 'black' : 'white');

    //Show menu on mobile devices
    const [showMenu, setShowMenu] = useState(false);

    //check location for text color
    useEffect(() => {
        if (String(location.pathname) !== "/"){
            setTextColor('black');
        }
        else{
            setTextColor('white');
        }
        
    }, [location.pathname]);


    //nav bar menu
    let mdmenu =  
        <div className="md:flex">
            <div onClick={() => {setTextColor('black'); setShowMenu(false)}} className="md:flex px-2 md:pl-8 md:pr-4">
                <HeaderItem text="Video" loc="/video" color={textColor} />
            </div>
            <div onClick={() => {setTextColor('black'); setShowMenu(false)}} className="md:flex px-2 md:pl-8 md:pr-4">
                <HeaderItem text="Software" loc="/software" color={textColor} onClick={() => setTextColor('black')} />
            </div>
            <div onClick={() => {setTextColor('black'); setShowMenu(false)}} className="md:flex px-2 md:pl-8 md:pr-4">
                <HeaderItem text="About" loc="/about" color={textColor} onClick={() => setTextColor('black')}/>
            </div>
        </div>

    //variable for mobile menu
    let menu;

    //set if showMenu is activated
    if(showMenu){
        menu = mdmenu
    }

    
    //variable for switching between black/white menu bar pngs
    let menucolor = (textColor === "white" ? menuwhite : menublack);

    



    return(
        <header>
            <nav className="p-4">

                {/* left side of nav bar (name, video, software, about)*/}
                <div className="flex justify-between items-start md:justify-start md:items-baseline md:">

                    <Link 
                        to="/" 
                        className={"font-bold text-xl text-" + textColor + " hover:text-gray-300 md:ml-4"}
                        onClick={() => setTextColor('white')}
                    >
                        Colin Farmer
                    </Link>

                    <div className="block text-right md:text-left md:flex">
                        <div className="md:hidden inline-block right-0" onClick={() => setShowMenu(!showMenu) }>
                            <img className="h-8 w-8" src={menucolor} alt="Menu"/>
                        </div>
                        {menu}
                        <div className="hidden md:flex">
                            {mdmenu}
                        </div>
                    </div>
                    
                    
                </div>
            </nav>

        </header>
    )
}

export default Header;