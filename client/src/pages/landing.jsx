import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

import NavBarMain from '../components/NavbarMain';
import Body from '../components/Content';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const landing = () => {
  return (
    <>
      <div className="flex">
        <Logo/>
        
        <div className='body flex flex-col min-h-screen w-full items-center mx-20 my-6 justify-center'>
          <div className='md:text-xl xl:text-4xl text-center font-semibold italic text-appgreen  mb-10'>
            Plan Your Journey and Take Flight
          </div>
          
          <Body />
        </div>

        <NavBarMain/>
      </div>

      <Footer />
    </>
  )
}

export default landing;