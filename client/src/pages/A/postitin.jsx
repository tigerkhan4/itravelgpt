import React from 'react'
import Sidebar from '../../components/Sidebar.jsx';
import TravelList from './Travellist.jsx'
import Footer from '../../components/Footer.jsx';
import NavbarPages from '../../components/NavbarPages.jsx';

const PublicTravels = [
  { location: 'Rabat, Morocco', date: 'May 18, 2023' },
  { location: 'New York, New York', date: 'December 20, 2022' },
  { location: 'San Francisco, California', date: 'August 12, 2022' },
];

const PrivateTravels = [
  { location: 'Toronto, Canada', date: 'June 12-20, 2024' },
  { location: 'New York, New York', date: 'December 20, 2024' },
  { location: 'San Francisco, California', date: 'August 12, 2022' },
];



const postitin = () => {
  return (
    <main className='flex flex-col min-h-screen'>
  <div className='flex flex-row flex-1'>
    <aside className='flex-none'>
      <Sidebar />
    </aside>
    
    <div className="flex flex-grow justify-center mx-40 md:mx-40 mt-10 md:flex-row md:space-y-0 md:space-x-4">
      <TravelList title="My Public Travels" travels={PublicTravels} />
      <TravelList title="My Private Travels" travels={PrivateTravels} />
    </div>
    
    <aside className='flex-none'>
      <NavbarPages />
    </aside>
  </div>
  <Footer />
</main>

      
    

  )
}

export default postitin;