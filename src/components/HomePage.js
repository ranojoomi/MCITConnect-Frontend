import React from 'react';
import {Link} from 'react-router-dom';
import {Text} from 'react-native';



const HomePage = () => {

    const link = <Link to="/match">journey!</Link>

    return (
        <div className="homepage App">
            <h2 className='Title'>CIT CONNECT</h2>
            <Text numberOfLines={1}>
                <p>Click to begin your {link}</p>
            </Text>
        </div>
    );
}
 
export default HomePage;