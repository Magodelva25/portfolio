import React from 'react';
import info from "./../info.json";

const HeroSection = () => {
  const { basics } = info;
  return (
    <div className='hero'>
        <div className='hero-title'>
          <h1>{basics.label}</h1>
        </div>
    </div>
  )
}

export default HeroSection