import React from 'react';
import {Link} from 'react-router-dom';

const Match = () => {

    const link = <Link to="/homepage"></Link>

    return (
        <div className="Contents App">
            <h1>This is a work in progress</h1>
            <button onClick={link}>Go back</button>
        </div>
    );
}
 
export default Match;