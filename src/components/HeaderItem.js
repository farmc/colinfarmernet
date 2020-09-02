import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItem(props){

    //const [isHovering, setIsHovering] = useState(false);

    //const animate = useSpring({transform: isHovering ? 200 : 100})

    return(
        //<animated.div style={animate}>
            <Link
                to={props.loc}
                className={"text-" + props.color + " hover:text-gray-300"} 
                //onMouseOver={() => setIsHovering(true)}
            >
                {props.text}
            </Link>
        //</animated.div>
    )


}

export default HeaderItem;