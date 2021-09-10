import React from 'react';
import {Link} from 'gatsby';
const NotFound = () => {
    return(
        <div>
            <h1>
                <pre>Page Not Found Go Back</pre>
            </h1>
            <Link to="/app">Go Back</Link>
        </div>
    )
}
export default NotFound;