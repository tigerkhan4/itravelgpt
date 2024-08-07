import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarPages from '../../components/NavbarPages';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

function Dc() {
  // get checklist data from the previous page
  const location = useLocation();
  const initialChecklist = location.state?.checklist;

  // set up navigate function for redirection
  const navigate = useNavigate();

  // if no checklist data, show message
  if (!initialChecklist) {
    return <div>No checklist found</div>;
  }

  // set up state to manage the checklist title and items
  const [title, setTitle] = useState(initialChecklist.title);
  const [checklist, setChecklist] = useState({
    ...initialChecklist,
    items: initialChecklist.items.map((item, index) => ({
      ...item,
      id: index,  // add ID for each item
      checked: false,  // default value for checked
    })),
  });

  // sync checklist items with initial data
  useEffect(() => {
    setChecklist({
      ...initialChecklist,
      items: initialChecklist.items.map((item, index) => ({
        ...item,
        id: index,
      })),
    });
  }, [initialChecklist]);

  // handle checkbox change (mark item as checked/unchecked)
  const handleCheckboxChange = (id) => {
    const updatedItems = checklist.items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist({ ...checklist, items: updatedItems });
  };

  // add item
  const handleNewItem = (category) => {
    const newItem = { text: "", checked: false, category, id: checklist.items.length };
    setChecklist({ ...checklist, items: [...checklist.items, newItem] });
  };

  // update item text
  const handleItemChange = (id, event) => {
    const updatedItems = checklist.items.map((item) =>
      item.id === id ? { ...item, text: event.target.value } : item
    );
    setChecklist({ ...checklist, items: updatedItems });
  };

  // update checklist title
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // save checklist to local storage
  const handleSave = () => {
    // retrieve existing checklists or start with an empty array
    const savedChecklists = JSON.parse(localStorage.getItem('checklists')) || [];

    // update or add current checklist
    const updatedChecklists = savedChecklists.map((item) =>
      item.id === checklist.id ? { ...checklist, title } : item
    );
    if (!updatedChecklists.some(item => item.id === checklist.id)) {
      updatedChecklists.push({ ...checklist, title });
    }

    // save updated checklists to local storage
    localStorage.setItem('checklists', JSON.stringify(updatedChecklists));
    console.log('Checklist saved:', { ...checklist, title });
    // redirect to the dashboard
    navigate('/dashboard');
  };

  // remove from checklist
  const handleRemoveItem = (id) => {
    const updatedItems = checklist.items.filter((item) => item.id !== id);
    setChecklist({ ...checklist, items: updatedItems });
  };

  // render items by category
  const renderItems = (items, category) => (
    <div>
      <h2 className="font-medium mb-2">{category}</h2>
      <ul className="list-none list-inside">
        {items
          .filter((item) => item.category === category)
          .map((item) => (
            <li key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleItemChange(item.id, e)}
                className={`ml-2 ${item.checked ? 'line-through' : ''}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveItem(item.id)}
                className="ml-2 text-xs text-gray-400 hover:font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
      <button
        type="button"
        onClick={() => handleNewItem(category)}
        className="text-appred mb-10 text-sm hover:font-semibold"
      >
        Add Item
      </button>
    </div>
  );

  return (
    <main className='dc flex flex-col min-h-screen'>
      <div className='flex flex-row flex-1'>
        
        <aside className='sidebar'>
          <Sidebar/>
        </aside>
  
        <div className='flex-1 mx-40'>
          <header className='flex flex-col items-start pt-10'>
            <div className='flex flex-wrap items-center'>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className='text-darkblue font-bold pr-5 text-3xl mb-2 flex-grow min-w-0'
              />
              <button
                type="button"
                onClick={handleSave}
                className="bg-appred text-white text-sm rounded-2xl py-1 px-4 ml-4 hover:font-bold"
              >
                Save
              </button>
            </div>
          </header>
          <div className='flex flex-col text-appgreen py-10 text-lg'>
            {renderItems(checklist.items, "Clothing")}
            {renderItems(checklist.items, "Misc.")}
            {renderItems(checklist.items, "Toiletries")}
          </div>
        </div>
  
        <aside className=''>
          <NavbarPages />
        </aside>
  
      </div>
      <Footer />
    </main>
  );
  

}

export default Dc;
