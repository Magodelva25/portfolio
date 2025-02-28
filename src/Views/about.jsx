import React from 'react'
import info from './../info.json';
const About = () => {

  const {about} = info
  return (
    <div className='about-section'>
      <div className='about-title'>
        {about.title}
      </div>
    <div className='about-content'>
      {about.content}
    </div>

    <div className='about-picture'>
      <img src='https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="unsplash" />
    </div>
    </div>
  )
}

export default About
