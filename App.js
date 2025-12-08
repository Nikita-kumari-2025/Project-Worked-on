// import logo from "./Weblogo.png";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
//import Components from "./Components";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import Home from "./Components/Home/home";
import Protectedroues from "./Components/ProtectedRoutes/Protectedroues";
import Dashboard from "./Components/Dashboard/dashboard";
import MinesDetails from "./Components/MinesDetails/minesdetails";
import Sign_in from "./Components/Sign_in/signin";
import Sign_up from "./Components/Sign_up/signup";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={
          <Protectedroues><Dashboard /></Protectedroues>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/minesdetails" element={<MinesDetails />}></Route>
        <Route path="/signin" element={<Sign_in />}></Route>
        <Route path="/signup" element={<Sign_up />}></Route>

      </Routes>
      <Footer />
    </>
  )
};
export default App;
