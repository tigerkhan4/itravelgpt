import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar.jsx';
import Footer from '../../components/Footer.jsx';
import NavbarPages from '../../components/NavbarPages.jsx';

const NewTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({
    dates: '',
    locations: '',
    itinerary: '',
    budget: '',
    packingList: '',
    journal: { day1: '', day2: '' },
  });

  const [title, setTitle] = useState(id ? 'Edit Trip' : 'New Trip');
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  useEffect(() => {
    if (id !== undefined) {
      const trips = JSON.parse(localStorage.getItem('trips')) || [];
      const trip = trips[id];
      if (trip) {
        setTripDetails(trip);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('journal')) {
      const day = name.split('.')[1];
      setTripDetails((prevDetails) => ({
        ...prevDetails,
        journal: { ...prevDetails.journal, [day]: value },
      }));
    } else {
      setTripDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const trips = JSON.parse(localStorage.getItem('trips')) || [];
    if (id !== undefined) {
      trips[id] = { ...tripDetails, title }; // Include title in the trip details
    } else {
      trips.push({ ...tripDetails, title }); // Include title in the new trip
    }
    localStorage.setItem('trips', JSON.stringify(trips));
    navigate('/dashboard');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const additionalLinks = [
    <a href="#photos" key="photos">+ Photos</a>,
    
  ];

  return (
    <div className="flex flex-col min-h-screen bg-appbeige text-gray-500 font-sans">
      <Sidebar additionalLinks={additionalLinks} />
      <div className="flex flex-1 flex-col ml-40 p-6">
        <div className="flex-1 mb-6">
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={() => setIsEditingTitle(false)}
              className="text-3xl font-bold hover:font-semibold mt-24 border-none bg-transparent"
            />
          ) : (
            <div
              onClick={() => setIsEditingTitle(true)}
              className="text-3xl font-bold mt-24 hover:font-semibold cursor-pointer"
            >
              {title}
            </div>
          )}
          <button onClick={handleSubmit} className="bg-appred text-white py-2 px-4 rounded">Post</button>
        </div>
        <div className="flex-1 bg-appbeige p-6">
          <div className="mb-4">
            <div className="text-xl mb-2">Trip Dates:</div>
            <textarea name="dates" value={tripDetails.dates} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Trip Dates"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Locations:</div>
            <textarea name="locations" value={tripDetails.locations} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Locations"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Itinerary:</div>
            <textarea name="itinerary" value={tripDetails.itinerary} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Itinerary"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Budget:</div>
            <textarea name="budget" value={tripDetails.budget} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Budget"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Packing List:</div>
            <textarea name="packingList" value={tripDetails.packingList} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Packing List"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Journal:</div>
            <div className="text-xl mb-2">Day 1:</div>
            <textarea name="journal.day1" value={tripDetails.journal.day1} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Day 1"></textarea>
          </div>
          <div className="mb-4">
            <div className="text-xl mb-2">Day 2:</div>
            <textarea name="journal.day2" value={tripDetails.journal.day2} onChange={handleChange} className="w-full h-24 p-2 border border-gray-300 rounded" placeholder="Day 2"></textarea>
          </div>
        </div>
        <aside className='flex-none w-40'>
          <NavbarPages />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default NewTrip;
