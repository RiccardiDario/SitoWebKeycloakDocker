import React from 'react'
import './Homepage.css'
import Homebody from '../../components/HomeBody/Homebody';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {
  return (
    <div className="home">
      <div className="home__navbar">
      <Navbar />
      </div>
      <div className="home__body">
        <Homebody/>
      </div>
      <div className="home__footer">
        <Footer/>
      </div>
    </div>
  );
  
}