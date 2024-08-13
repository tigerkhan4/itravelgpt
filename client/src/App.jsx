
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

// pages 
import Landing from './pages/landing';
import Explore from './pages/explore';

import Login from './pages/T/login';
import Signup from './pages/T/signup';
import NYCItin from './pages/T/nycitin';

import Dashboard from './pages/A/dashboard';
import Newtrip from './pages/A/newtrip';
import Postitin from './pages/A/postitin';

import MTB from './pages/N/mtb';
import Wtp from './pages/N/wtp';
import Dc from './pages/N/dc';

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/explore", element: <Explore /> },

  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/nycitin", element: <NYCItin /> },

  { path: "/dashboard", element: <Dashboard /> },
  { path: "/newtrip", element: <Newtrip /> },
  { path: "/newtrip/:id", element: <Newtrip /> },
  { path: "/postitin", element: <Postitin /> },

  { path: "/mtb", element: <MTB/> },
  { path: "/wtp", element: <Wtp /> },
  { path: "/dc", element: <Dc/> },

  { path: "/dc/:id", element: <Dc/> },
]);

function App() {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <hr/>
    </div>
  )
}

export default App