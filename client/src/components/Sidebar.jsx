import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar({ additionalLinks }) {
    return (
        <div className="sidebar fixed top-0 left-0 h-full w-40 text-appred bg-transparent">
            <a href="/" className="logo flex flex-col items-start mt-2 ml-2">
                <img className="h-14 w-auto" src={logo} alt="logo" />
                <p className='text-darkblue '>iTravel</p>
            </a>
            <nav className="mt-10 ml-2">
                <Link to="/explore" className="block mt-4">Explore Page</Link>
                <Link to="/dashboard" className="block mt-4">My Dashboard</Link>
                <Link to="/mtb" className="block mt-4">My Travel Buddy</Link>
                <br></br>
                {additionalLinks && additionalLinks.map((link, index) => (
                    <React.Fragment key={index}>
                        {link}
                        <br /><br />
                    </React.Fragment>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
