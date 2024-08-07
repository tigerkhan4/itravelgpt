import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="bg-appbeige p-4 flex items-center justify-between">
    <Link to="/" className="flex items-center space-x-3">
      <img className="h-14 w-auto" src={logo} alt="logo" />
      <p className="text-darkblue font-bold text-xl">iTravel</p>
    </Link>
    {/* Add navigation links here if needed */}
  </header>
);
};

export default Header;
