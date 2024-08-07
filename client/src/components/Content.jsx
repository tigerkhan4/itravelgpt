import explore from '../assets/explore.png';
import dashboard from '../assets/dashboard.png';
import itinerary from '../assets/itinerary.png';
import mytravelbuddy from '../assets/mytravelbuddy.png';
import { Link } from 'react-router-dom';

// screenshots for body
const Body = () => {
    return (
        <div className="body space-y-4">

            <img className="explore max-w-full " src={explore} alt="explore" width={780} ></img>

            <img className="dashboard max-w-full" src={dashboard} alt="dashboard2" width={780}></img>

            <img className="itinerary max-w-full" src={itinerary} alt="itinerary" width={780}></img>
            
            <img className="mytravelbuddy max-w-full" src={mytravelbuddy} alt="mytravelbuddy" width={780}></img>
            
            <div className="flex justify-center">
            <Link to= "/signup" className="signupbutton w-auto px-6 py-3 bg-darkblue text-white rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 text-xl font-bold"> Sign Up!</Link>

            </div>

        </div>  
    )
}      


export default Body;