import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../../util/urls'

const NavBar = (props) => {
    return (
        <div id='navbar'>
            <div id='logo-container'>
                <img 
                src={ logo }
                id='logo'/>
            </div>
            
            <div id='navlinks-container'>
                <Link smooth to="/#navlinks-container">
                    Home
                </Link>
                <Link smooth to="/#map-images-container">
                    Regions
                </Link>
                <Link smooth to="/#contact-form-container">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default NavBar;