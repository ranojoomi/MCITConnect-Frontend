import React from 'react';
import {Link} from 'react-router-dom';
import {Text} from 'react-native';
import BLeft from '../assets/Bottom_Left.png'
import BRight from '../assets/Bottom_Right.png'
import TRight from '../assets/Top_Right.png'



const HomePage = () => {

    const link = <Link to="/match">journey!</Link>

    return (
        <div className="homepage App">
            <h2 className='Title'>CIT CONNECT</h2>
            <h3 subTitle="sub">Fun for MCIT</h3>
            <Text numberOfLines={1}>
                <p>Click to begin your {link}</p>
            </Text>
            <img className='BLeft' src={BLeft} alt="Beautiful" />
            <img className='BRight' src={BRight} alt="Rock" /> 
            <img className='TRight' src={TRight} alt="Rocks" />
        </div>
    );
}
 
export default HomePage;