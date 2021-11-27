import React from 'react'
import { Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './DemoSite/Home';
import About from './DemoSite/About';
import Services from './DemoSite/Services';
import Contact from './DemoSite/Contact';
import NavBar from './DemoSite/NavBar'
import  './DemoSite/All.css';
import Footer from './DemoSite/Footer';
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
          <Route path ="/" element={<Home/>}></Route>
          <Route path ="/contact" element={<Contact/>}></Route>
          <Route path ="/services" element={<Services/>}></Route>
          <Route path ="/About" element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App

