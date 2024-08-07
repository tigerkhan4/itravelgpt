import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './mtb.css';

import logo from '../../assets/logo.png';
import send from '../../assets/send.svg';
import profile from '../../assets/profile.png';
// import user from '../../assets/user.png';
import bot from '../../assets/bot.png';
import loadingIcon from '../../assets/loader.svg';

// components
import Footer from '../../components/Footer';
import NavBarPages from '../../components/NavbarPages';
import SideBar from '../../components/Sidebar'; 



function MTB() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // Scroll to the bottom of the chat whenever posts change
  useEffect(() => {
    const layout = document.querySelector(".layout");
    layout.scrollIntoView = layout.scrollHeight;
  }, [posts]);

  // Function to fetch bot response from the server
  const fetchBotResponse = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000", { input }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return { bot: "Sorry, something went wrong." };
    }
  };

  // Function to handle form submission
  const onSubmit = async () => {
    if (input.trim() === "") return;
    addPost(input, "user");
    addPost("loading", "loading");
    setInput("");
    const res = await fetchBotResponse();
    removeLoadingPost();
    addPost(res.bot.trim(), "bot");
  };

  // Function to add a post to the chat
  const addPost = (content, type) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { type, content }
    ]);
  };

  // Function to remove the loading post
  const removeLoadingPost = () => {
    setPosts((prevPosts) => prevPosts.filter(post => post.type !== "loading"));
  };

  // Function to handle key up event
  const onKeyUp = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();
    }
  };

  return (
    <main className='mtb flex flex-col min-h-screen'>
      <div className='flex flex-row flex-1'>
        
        <aside className='sidebar flex-none w-40'>
          <div className="fixed top-0 left-0 h-full w-40 text-appred bg-transparent">
              <a href="/" className="logo flex flex-col items-start mt-2 ml-2">
                  <img className="h-14 w-auto" src={logo} alt="logo" />
                  <p className='text-darkblue font-bold'>iTravel</p>
              </a>
              <nav className="mt-10 ml-2">
                  <Link to="/explore" className="block mt-4">Explore Page</Link>
                  <Link to="/dashboard" className="block mt-4">My Dashboard</Link>
                  <br></br>
                  <Link to="/newtrip" className="block mt-4">+ New Trip</Link>                         
              </nav>
          </div>
        </aside>
  
        <div className=' flex-1 mx-auto'>
          <div className='title text-6xl font-extrabold italic text-appred pb-10 pt-10'>
            My Travel Buddy
          </div>
  
          <div className='chats'> 
            <div className='greeting-bot greeting flex flex-row p-4'>
              <img className="w-14 h-14 mr-2" src={bot} alt="bot" />
              <div className='py-2 px-4 my-2 rounded-2xl bg-appblue'>
                Hey there! Got any travel questions for me?
              </div>
            </div>
  
            <section className='chat-container flex-1 overflow-y-auto'>
              <div className='layout'>
                {posts.map((post, index) => (
                  <div key={index} className={`chat-bubble p-4 rounded-lg my-2 flex items-start`}>
                    <div className='avatar'>
                      <img src={post.type === "bot" || post.type === "loading" ? bot : profile} alt="avatar" className='min-w-14 max-w-14 mr-2 rounded-full' />
                    </div>
                    {post.type === "loading" ? (
                      <div className='loader'>
                        <img src={loadingIcon} alt="loading" />
                      </div>
                    ) : (
                      <div className={`post ${post.type === "bot" ? "bg-appblue" : "bg-appred"} py-2 px-4 rounded-2xl max-w-full break-words`}>
                        {post.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
  
            <footer className='flex items-center space-x-2 p-4 rounded-lg'>
              <textarea
                value={input}
                className='composebar bg-appred placeholder-white border-none py-2 px-4 rounded-2xl flex-grow focus:outline-none resize-none overflow-y-auto'
                autoFocus
                type="text"
                placeholder='Ask Anything!'
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={onKeyUp}
              />
              <div className='send-button cursor-pointer' onClick={onSubmit}>
                <img src={send} alt="send" />
              </div>
            </footer>
          </div>
        </div>
  
        <aside className='flex-none w-40'>
          <NavBarPages />
        </aside>

      </div>
      <Footer />
    </main>
  );
}

export default MTB;
