import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItem(props){

    return(
            <Link
                to={props.loc}
                className={"text-" + props.color + " hover:text-gray-300"} 
            >
                {props.text}
            </Link>
    )


}

export default HeaderItem;