import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer.jsx';
import Logo from '../../components/Logo.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });
      console.log(response);

      if (response.data.length > 0) {
        console.log("Login successful");
        // If successful login, save token and redirect to explore page
        localStorage.setItem('token', response.data.token);
        navigate('/explore');
      } else {
        console.log("Login unsuccessful");
        setPasswordError('Login unsuccessful, please check your email and password');
      }
    } catch (err) {
      console.log(err);
      setPasswordError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex">
      <Logo/>
  
      <div className="mainContainer flex flex-col items-center justify-center min-h-screen w-full mx-20">
        <div className="title text-8xl font-extrabold italic text-appgreen pb-10">
          Fly Safe!
        </div>
  
        <div className="formContainer bg-appyellow p-8 rounded-lg shadow-md w-full max-w-md">
          <form onSubmit={onFormSubmit}>
            <div className="inputContainer mb-4">
              <input
                type="email"
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className="inputBox w-full p-2 border border-black-300 text-black rounded"
              />
              <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className="inputContainer mb-4">
              <input
                type="password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className="inputBox w-full p-2 border border-black-300 text-black rounded"
              />
              <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className="inputContainer">
              <button
                className="inputButton w-full p-2 bg-appred text-white rounded cursor-pointer"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>
  );
  
}

export default Login;
