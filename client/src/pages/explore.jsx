import React from 'react'
import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import NavbarPages from '../components/NavbarPages';

import london from '../assets/london.jpg';
import paris from '../assets/paris.jpeg';
import tokyo from '../assets/tokyo.jpg';
import nyc from '../assets/nyc.jpg';
import rabat from '../assets/rabat.webp';
import patagonia from '../assets/patagonia.webp';
import logo from '../assets/logo.png';



const panels = [
    {
      id: 4,
      image: nyc,
      title: 'New York City, New York',
      text: 'Experience the best of NYC with Juan’s Itinerary! From the bright lights of Times Square to the charm of Central Park, explore iconic landmarks, world-class museums, and vibrant neighborhoods. Catch a Broadway show, enjoy gourmet dining, and stroll across the Brooklyn Bridge. Click to discover a perfectly curated adventure in the city that never sleeps!',
      backgroundColor: 'bg-appred',
      link: '/nycitin'
      
    },
    {
      id: 2,
      image: paris,
      title: 'Paris, France',
      text: 'Unveil the charm of Paris with my curated itinerary! Wander through the romantic streets of Montmartre, marvel at the iconic Eiffel Tower, and explore world-class art at the Louvre. Enjoy a leisurely cruise on the Seine River, indulge in delicious pastries at local cafés, and immerse yourself in the elegance of Champs-Élysées. Click to experience the magic of Paris and make your trip unforgettable!',
      backgroundColor: 'bg-appgreen',
    },
    {
      id: 3,
      image: tokyo,
      title: 'Tokyo, Japan',
      text: 'Immerse yourself in the dynamic energy of Tokyo with my exciting itinerary! Discover the bustling streets of Shibuya, marvel at the historic Senso-ji Temple, and enjoy panoramic views from the Tokyo Skytree. Experience the vibrant culture of Akihabara and the serene beauty of Shinjuku Gyoen National Garden. Indulge in world-class dining, shop in trendy districts like Harajuku, and dive into Tokyo’s unique blend of tradition and modernity. Click to explore the best of Tokyo and start your adventure today!',
      backgroundColor: 'bg-appred',
    },
    {
      id: 1,
      image: london,
      title: 'London, England',
      text: 'Discover the highlights of London with our must-see itinerary! From the historic Tower of London and the majestic Buckingham Palace to the vibrant Covent Garden, explore the city’s rich heritage and modern flair. Take a ride on the London Eye, stroll through Hyde Park, and enjoy shopping on Oxford Street. Click to uncover the best of London and plan your perfect adventure!',
      backgroundColor: 'bg-appyellow',
    },
    {
      id: 5,
      image: rabat,
      title: 'Rabat, Morocco',
      text: 'Explore the rich history and vibrant culture of Rabat with my itinerary to Rabat! Wander through the stunning Hassan Tower, visit the historic Kasbah of the Udayas, and soak in the serene beauty of the Rabat Botanical Gardens. Discover the bustling Medina and indulge in local Moroccan cuisine at charming cafés. Click to dive into the charm of Rabat and experience the heart of Morocco!',
      backgroundColor: 'bg-appblue',
    },
    {
      id: 6,
      image: patagonia,
      title: 'Patagonia, Argentina',
      text: 'Embark on an adventure through the breathtaking landscapes of Patagonia with me as your guide! Witness the awe-inspiring Perito Moreno Glacier, hike through the dramatic scenery of Torres del Paine National Park, and marvel at the stunning Fitz Roy Mountain. Enjoy outdoor activities like trekking, kayaking, and observing wildlife in this pristine wilderness. Click to uncover the natural wonders of Patagonia and plan your epic journey',
      backgroundColor: 'bg-appyellow',
    }
  ];
  
  const ExplorePage = () => {

    return (
      <main className='flex flex-col min-h-screen '>
        <div className='flex flex-row flex-1'>

        <aside className='sidebar flex-none'>
          <div className="fixed top-0 left-0 h-full w-40 text-appred bg-transparent">
              <a href="/" className="logo flex flex-col items-start mt-2 ml-2">
                  <img className="h-14 w-auto" src={logo} alt="logo" />
                  <p className='text-darkblue font-bold'>iTravel</p>
              </a>
              <nav className="mt-10 ml-2">
                  <Link to="/dashboard" className="block mt-4">My Dashboard</Link>
                  <Link to="/mtb" className="block mt-4">My Travel Buddy</Link>
                  <br></br>
                  <Link to="/newtrip" className="block mt-4">+ New Trip</Link>                         
              </nav>
          </div>
        </aside>
        
          <div className="min-h-screen py-10 flex items-center justify-center rounded-lg mx-40">
            <div className="postcard max-w-6xl mx-auto mt-2 p-8 rounded-lg shadow-lg">
              <header className="text-center mb-8">
                <h1 className="title text-6xl font-bold text-appyellow italic">Explore Travels</h1>
                <div className="absolute top-0 right-0 m-4">
                  {/* Optional content here */}
                </div>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
                {panels.map(panel => (
                  panel.link ? (
                    <Link
                      key={panel.id}
                      to={panel.link}
                      className={`block rounded-lg shadow-lg overflow-hidden ${panel.backgroundColor}`}
                    >
                      <img src={panel.image} alt={panel.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{panel.title}</h3>
                        <p className="text-gray-600 text-sm">{panel.text}</p>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={panel.id}
                      className={`rounded-lg shadow-lg overflow-hidden ${panel.backgroundColor}`}
                    >
                      <img src={panel.image} alt={panel.title} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{panel.title}</h3>
                        <p className="text-gray-600 text-sm">{panel.text}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        <NavbarPages/>
        </div>
        <Footer />
      </main>

      
  );
};

export default ExplorePage;

  