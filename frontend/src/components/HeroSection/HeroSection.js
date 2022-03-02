import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='static/video-1.mp4'autoPlay loop muted />
      {/* <img className="heroImg" src="/img/E-Home.jpg" alt=''/> */}
      <h1>E-Appointments & Visiting System</h1>
      <p>Discover the easiest way to schedule appointments with us</p>
      <div className='hero-btns'>
        <Link to="/loginandsignup">
        <Button
          className='btns'
          buttonstyle='btn--outline'
          buttonsize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
        <Button
          className='btns'
          buttonstyle='btn--primary'
          buttonsize='btn--large'
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
