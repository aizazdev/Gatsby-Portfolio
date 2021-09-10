import React from 'react';
import {Link } from 'gatsby';

const Layout = ({children})=> {
    return(
        <div>
            {children}
            <Link to="/">Home</Link> <Link to="/about">About</Link> 
        </div>
    )
}

export default Layout;