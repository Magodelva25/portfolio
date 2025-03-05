import React from 'react'
import info from './../info.json';
import TechCard from '../components/techCard';


const About = () => {


  const { about, basics } = info
  const hobbies = 
    about.hobbies.map((hobbie, index) => (
      <TechCard key={index} techs={hobbie}/>
    ));
  
  return (
    <div className='about-section'>
      <div className='about-title'>
        <h2>{about.title}</h2>
        <span>{about.label}</span>
        <p>{about.content}</p>
      </div>
      <div className='hobbies'>
        <div className='hobbies-list'>
          {hobbies}
        </div>
      </div>
      <div className='about-picture'>
        <img src={basics.image} alt="Manuel-Gonzalez" />
      </div>
    </div>
  )
}

export default About
