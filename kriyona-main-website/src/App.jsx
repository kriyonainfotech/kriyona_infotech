import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/auth/register";
import './App.css'
// import Chat from "./Pages/auth/chat";
// import SignIn from "./Pages/auth/login";
const App = () => {
  useEffect(() => {
    // Disable F12 and Ctrl+Shift+I or Ctrl+U
    const handleKeydown = (e) => {
      if (e.keyCode === 123) {
        // Disable F12 (DevTools)
        e.preventDefault();
      }
      if (e.ctrlKey && (e.keyCode === 73 || e.keyCode === 85)) {
        // Disable Ctrl+Shift+I or Ctrl+U (DevTools)
        e.preventDefault();
      }
    };

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeydown);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/OurWork" element={<OurWork></OurWork>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
