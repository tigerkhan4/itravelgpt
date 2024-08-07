import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar.jsx';
import Footer from '../../components/Footer.jsx';

const EditTrip = () => {
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

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('trips')) || [];
    const trip = trips[id];
    if (trip) {
      setTripDetails(trip);
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

  const handleSave = () => {
    const trips = JSON.parse(localStorage.getItem('trips')) || [];
    trips[id]
  }}