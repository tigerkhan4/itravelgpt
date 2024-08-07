// import React from 'react';
// import { useState } from 'react';
import logo from '../assets/logo.png';
import DropDownMenu from './DropDownMenu';
import { Link } from 'react-router-dom';

// import { navItems } from '../components/Content';


const NavBarMain = () => {
    return (
        <>
            <div className="fixed top-2 right-2 bg-transparent">
                <DropDownMenu/>
            </div>

        </>
    )
}

export default NavBarMain;