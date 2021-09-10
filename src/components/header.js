import React from 'react';

const Header = ({text, subText})=> {
    return(
        <div>
            <p>{text}</p>
            <p>{subText}</p>
        </div>
    )
}
export default Header;