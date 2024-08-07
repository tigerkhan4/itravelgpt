import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

import logo from '../../assets/logo.png'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer.jsx';
import NavbarPages from '../../components/NavbarPages';

const Dashboard = () => {
  const [savedChecklists, setSavedChecklists] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const checklists = JSON.parse(localStorage.getItem('checklists')) || [];
    setSavedChecklists(checklists);
  }, []);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(savedTrips);
  }, []);
  

  return (
    <div className="dashboard min-h-screen flex flex-col">
      <div className="flex flex-1">
  
        <aside className='sidebar flex-none w-40'>
          <div className="fixed top-0 left-0 h-full w-40 text-appred bg-transparent">
            <a href="/" className="logo flex flex-col items-start mt-2 ml-2">
              <img className="h-14 w-auto" src={logo} alt="logo" />
              <p className='text-darkblue font-bold'>iTravel</p>
            </a>
            <nav className="mt-10 ml-2">
              <Link to="/explore" className="block mt-4">Explore Page</Link>
              <Link to="/mtb" className="block mt-4">My Travel Buddy</Link>
              <br />
              <Link to="/newtrip" className="block mt-4">+ New Trip</Link>
              <Link to="#photos" className="block mt-4">+ Photos</Link>
            </nav>
          </div>
        </aside>
  
        <main className="flex-1 mx-4 ">
          <h1 className="title text-6xl font-extrabold italic text-appred text-center pt-10 pb-10">My Travel Dashboard</h1>
  
          <div className="main-content grid gap-4 md:grid-cols-2 ">
            <Link to= "/postitin" className="section myDestinations bg-appblue p-4">
              <h2 className='hover:font-bold'>My Destinations</h2>
              <ul>
                {trips.map((trip, index) => (
                  <li key={index}>
                    <Link to={`/newtrip/${index}`} className="trip-link opacity-70 hover:font-semibold">
                      {trip.title || `Trip ${index + 1}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </Link>
            <div className="section myJournal bg-appyellow p-4">My Journal</div>
            <div className="section myBudget bg-appgreen p-4">My Budget</div>
            <div className="section myResources bg-appred p-4">
              <h2>My Resources</h2>
              <ul>
                {savedChecklists.map((checklist) => (
                  <li key={checklist.id}>
                    <Link to={`/dc`} state={{ checklist }} className="checklist-link opacity-70 hover:font-semibold">
                      {checklist.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="section tasks bg-appyellow p-4">
              <h2>Tasks</h2>
              <ul>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="mytasks" placeholder="New Task"></textarea>
                </li>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="mytasks" placeholder="New Task"></textarea>
                </li>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="mytasks" placeholder="New Task"></textarea>
                </li>
              </ul>
            </div>
            <div className="section bucketList bg-appblue p-4">
              <h2>Bucket List</h2>
              <ul>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="Bucket List" placeholder="New Item"></textarea>
                </li>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="Bucket List" placeholder="New Item"></textarea>
                </li>
                <li className="ul text-black">
                  <input type="checkbox" /> <textarea className="Bucket List" placeholder="New Item"></textarea>
                </li>
              </ul>
            </div>
          </div>
        </main>
  
        <aside className='flex-none w-40'>
          <NavbarPages />
        </aside>
  
      </div>
      <Footer />
    </div>
  );
  
  
}

export default Dashboard;
