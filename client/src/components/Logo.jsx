import React from 'react'
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <aside className="sidebar flex-none">
        <div className="fixed top-0 left-0 h-full w-40 text-appred bg-transparent">
          <a href="/" className="logo flex flex-col items-start mt-2 ml-2">
            <img className="h-14 w-auto" src={logo} alt="logo" />
            <p className="text-darkblue font-bold">iTravel</p>
          </a>
        </div>
    </aside>
  )
}

export default Logo