import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './signup.css';
import axios from 'axios';
import Footer from '../../components/Footer.jsx';
import Logo from '../../components/Logo.jsx';



export default function Form() {

  const [formObj, setformObj] = useState({
    name:"",
    email:"",
    password:""
  })

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();


  // Validation logic for form submission
  const validateForm = () => {
    let hasError = false;
    const {
      name,
      email,
      password
    } = formObj

    setEmailError('');
    setPasswordError('');

    if (name === '') {
      setError(true);
      hasError = true;
    }

    if (email === '') {
      setEmailError('Please enter your email');
      hasError = true;
    } else if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      hasError = true;
    } else if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      hasError = true;
    }
    
    return !hasError;
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log(formObj);
    console.log(import.meta.env.VITE_API_URL);
    try {
      const response =  await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {...formObj});
      console.log(response);
      if (response.data) {
        console.log("Redirecting to login page");
        window.location.href = '/login'; // Hard redirect
      } else {
        console.log("signup not successful");
      }
    } catch (err) {
      console.error('Error response:', err.response);
      console.error('Error message:', err.message);
      console.error('Error config:', err.config);
    }

    setSubmitted(true);
    setError(false);
    // Add any further processing or API call here
  } else {
    setSubmitted(false);
  }
};

  // Showing success message
  const successMessage = () => (
    <div className="success" style={{ display: submitted ? '' : 'none' }}>
      <h1>User {formObj.name} successfully registered!!</h1>
    </div>
  );

  // Showing error message if error is true
  const errorMessage = () => (
    <div className="error" style={{ display: error ? '' : 'none' }}>
      <h1 className='text-white'>Please enter all the fields</h1>
    </div>
  );

  return (
    <div className="flex">
      <Logo/>
  
      <div className="mainContainer flex flex-col min-h-screen w-full mx-20 my-2 justify-center">
        <div className="title text-7xl font-extrabold italic text-appgreen pb-10">
          Start Your Journey
        </div>
  
        <div className="form-container">
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
  
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label className="label">Name</label>
              <input
                onChange={(e) =>
                  setformObj({ ...formObj, [e.target.name]: e.target.value })
                }
                className="input text-black"
                type="text"
                name="name"
              />
            </div>
            <br></br>
            <div className="input-group">
              <label className="label">Email</label>
              <input
                onChange={(e) =>
                  setformObj({ ...formObj, [e.target.name]: e.target.value })
                }
                className="input text-black"
                type="email"
                name="email"
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <br></br>
            <div className="input-group">
              <label className="label">Password</label>
              <input
                onChange={(e) =>
                  setformObj({ ...formObj, [e.target.name]: e.target.value })
                }
                className="input text-black"
                type="text"
                name="password"
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <br></br>
            <button
              className="btn hover:font-bold w-full p-2 bg-appred text-white rounded cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <br></br>
        <Footer />
      </div>
    </div>
  );
  
}