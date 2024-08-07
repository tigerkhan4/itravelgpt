import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarPages from '../../components/NavbarPages';
import Sidebar from '../../components/Sidebar';

import Footer from '../../components/Footer';


function WTP() {
  // State to hold the list of checklists
  const [checklists, setChecklists] = useState([
    {
      id: 1,
      title: "NYC Fall Packing List",
      items: [
        { text: "long pants", category: "Clothing" },
        { text: "light jacket", category: "Clothing" },
        { text: "dollar bills", category: "Misc." },
        { text: "extra change", category: "Misc." },
        { text: "hand sanitizer", category: "Toiletries" },
        { text: "sunscreen", category: "Toiletries" },
        { text: "toothpaste", category: "Toiletries" },
        { text: "toothbrush", category: "Toiletries" }
      ]
    }
  ]);

  // Hook to navigate to other routes
  const navigate = useNavigate();

  // Function to create and add a new checklist
  const duplicateChecklist = () => {
    // Create a new checklist object
    const newChecklist = {
      id: checklists.length + 1,
      title: `NYC Fall Packing List - Copy ${checklists.length + 1}`,
      items: [
        { text: "long pants", category: "Clothing" },
        { text: "light jacket", category: "Clothing" },
        { text: "dollar bills", category: "Misc." },
        { text: "extra change", category: "Misc." },
        { text: "hand sanitizer", category: "Toiletries" },
        { text: "sunscreen", category: "Toiletries" },
        { text: "toothpaste", category: "Toiletries" },
        { text: "toothbrush", category: "Toiletries" }
      ]
    };

    // Update the state with the new checklist
    setChecklists([...checklists, newChecklist]);

    // Navigate to the checklist details page, passing the new checklist
    navigate(`/dc`, { state: { checklist: newChecklist } });
  };

  return (
    <main className='mtb flex flex-col min-h-screen'>
      <div className='flex flex-row flex-1'>
        
          <Sidebar/>

        {/* Map through each checklist to render it */}
        {checklists.map((checklist) => (
          <div key={checklist.id} className='flex-1 mx-40 pt-10'>
            <header className='flex flex-col items-start'>
              <div className='flex items-center'>
                {/* Display the title of the checklist */}
                <h1 className='text-darkblue font-bold pr-5 text-3xl'>
                  {checklist.title}
                </h1>
                {/* Button to duplicate the checklist */}
                <button
                  type='button'
                  className='bg-appred text-white text-sm w-fit rounded-2xl py-1 px-4 mr-2 hover:font-bold'
                  onClick={duplicateChecklist}
                >
                  Duplicate
                </button>
              </div>
            </header>
            
            <div className='flex-col text-appgreen'>
              {/* Render items by category */}
              <div>
                <h2 className="font-medium mb-2 mt-10">Clothing</h2>
                <ul className="list-disc list-inside">
                  {checklist.items
                    .filter(item => item.category === "Clothing")
                    .map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                </ul>
              </div>
              
              <div>
                <h2 className="font-medium mb-2 mt-10">Misc.</h2>
                <ul className="list-disc list-inside">
                  {checklist.items
                    .filter(item => item.category === "Misc.")
                    .map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                </ul>
              </div>

              <div className="col-span-2">
                <h2 className="font-medium mb-2 mt-10">Toiletries</h2>
                <ul className="list-disc list-inside">
                  {checklist.items
                    .filter(item => item.category === "Toiletries")
                    .map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        <NavbarPages/>
        

      </div>
      <Footer />
    </main>
  );
}

export default WTP;
