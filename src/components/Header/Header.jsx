import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{marginRight: '1rem'}}>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
        
        </nav>
    );
};

export default Header;