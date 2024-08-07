import React from 'react';
import { Link } from 'react-router-dom';
import duplicateitinerary from '../../assets/duplicateitinerary.png';
import Sidebar from '../../components/Sidebar.jsx';
import Footer from '../../components/Footer.jsx';
import NavbarPages from '../../components/NavbarPages.jsx';


const Itinerary = () => {
  const additionalLinks = [
    <Link to="/newtrip" key="newtrip">+ New Trip</Link>
  ];

  return (
      <div className="flex flex-col min-h-screen text-gray-500 ">
        <Sidebar additionalLinks={additionalLinks} />
        <div className="flex flex-1 flex-col ml-40 p-6">
          <div className="postcard-container bg-appyellow p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
            <div className="relative flex items-center justify-center mb-6">
              <h1 className="title text-6xl text-appred italic font-extrabold">Juan's Trip to NYC</h1>
              <img
                src={duplicateitinerary}
                alt="Duplicate Itinerary"
                className="duplicate-button absolute right-4 cursor-pointer hover:opacity-80 transition-opacity h-32 w-22"
                onClick={() => { console.log("Duplicate Itinerary clicked"); }}
              />
            </div>
            <br></br>
        <div className="flex-1  bg-appyellow px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* What to Pack */}
            <Link to="/wtp" className="p-4 bg-appred text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">What to Pack</h2>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Long Pants</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Light Jacket</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Cash</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Hand Sanitizer</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Sunscreen</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Toothpaste</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Toothbrush</li>
              </ul>
            </Link>

            {/* Bucket List */}
            <div className="p-4 bg-appgreen text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Bucket List</h2>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> See Times Square</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Visit the MET Museum</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Walk around Steinway</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Statue of Liberty and Ellis Island</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Watch Aladdin on Broadway</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Walk through Central Park</li>
                <li className="flex items-center"><input type="checkbox" className="mr-2" /> Go on a Food Crawl with Friends</li>
              </ul>
            </div>

            {/* Experiences/Museums */}
            <div className="p-4 bg-appblue text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Activities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Museum of Modern Art (MOMA)</li>
                <li>The Metropolitan Museum of Art</li>
                <li>Broadway Show</li>
                <li>Coney Island's Amusement Park</li>
                <li>Museum of Natural History</li>
              </ul>
            </div>

            {/* Transportation */}
            <div className="p-4 bg-appred text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">How to Get Around</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rental Car for Day Trips</li>
                <li>Subway - Get a Metrocard</li>
                <li>Bicycle - CitiBike</li>
                <li>Staten Island Ferry</li>
              </ul>
            </div>

            {/* What to Eat */}
            <div className="p-4 bg-appgreen text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">What to Eat</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Thai Villa</li>
                <li>Carbone</li>
                <li>Cote Restaurant</li>
                <li>Get the infamous NY bagel</li>
                <li>Visit iconic pizzerias</li>
                <li>Eleven Madison Park</li>
                <li>Chelsea Market</li>
              </ul>
            </div>

            {/* Landmarks/Areas to Visit */}
            <div className="p-4 bg-appblue text-white border-2 border-dashed border-gray-400 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Landmarks</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Central Park</li>
                <li>Times Square</li>
                <li>Brooklyn Bridge Park (Be sure to take pictures by the bridge!)</li>
                <li>High Line</li>
                <li>Shop at SoHo</li>
              </ul>
            </div>
          </div>
        </div>
        <aside className='flex-none w-40'>
          <NavbarPages />
        </aside>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Itinerary;
