import React from 'react';
import Navbar from './Navbar';
import '../app/style/hero.css';

const Hero = () => {
  return (
    <div id="hero" className='hero-container'>
      <Navbar />
      <div className='hero-content'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'>
          <div className='hero-misn'>
            <p data-aos="zoom-in-up">I&apos;m</p> {/* Escaped single quote */}
            <p data-aos="zoom-in-up">Muhammad</p>
            <p data-aos="zoom-in-up">Daniyal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

