import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import HeaderItem from './HeaderItem.js';
import menuwhite from '../images/menuwhite.png'
import menublack from '../images/menublack.png'
import {useTransition, animated} from 'react-spring';

function Header(){


    //check location and set text and bg color
    let location = useLocation();
    const [textColor, setTextColor] = useState(String(location.pathname) !== "/" ? 'black' : 'white');
    const [bgColor, setBgColor] = useState(String(location.pathname) !== "/" ? 'gray-700' : '');

    //Show menu on mobile devices
    const [showMenu, setShowMenu] = useState(false);

    //check location for text color
    useEffect(() => {
        if (String(location.pathname) !== "/"){
            setTextColor('gray-100'); 
            setBgColor('gray-700');
        }
        else{
            setTextColor('white');
            setBgColor('');
        }
        
    }, [location.pathname]);


    //nav bar menu
    let mdmenu =  
        <div className="md:flex">
            <div onClick={() => {setShowMenu(false)}} className="md:flex md:pl-8 md:pr-4">
                <HeaderItem text="Video" loc="/video" color={textColor} />
            </div>
            <div onClick={() => {setShowMenu(false)}} className="md:flex md:px-4">
                <HeaderItem text="Software" loc="/software" color={textColor} />
            </div>
            <div onClick={() => {setShowMenu(false)}} className="md:flex md:px-4">
                <HeaderItem text="About" loc="/about" color={textColor} />
            </div>
        </div>

    //variable for mobile menu
    let menu = mdmenu;

    //variable for switching between black/white menu bar pngs
    let menucolor = (textColor === "white" ? menuwhite : menublack);

    //set up menu transition
    const menuTrans = useTransition(showMenu, null, {
        from: {opacity: 0, transform: 'translateY(-100%)'},
        enter: {opacity: 1, transform: 'translateY(0%)'},
        leave: {opacity: 0, transform: 'translateY(-100%)'},
    });

    



    return(
        <header>
            <nav className={"p-4 bg-" + bgColor}>

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

                        {
                            menuTrans.map(({item, key, props}) => 
                                item&&
                                <animated.div
                                    key={key}
                                    style={props}
                                >
                                    {menu}
                                </animated.div>
                            )
                        }

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