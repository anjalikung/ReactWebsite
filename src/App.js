import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App =()=>{
  return (
    <>
   
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/service'  element={<Service/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        
      </Routes>

      <Footer/>
      
    </>
  );
}

export default App;
