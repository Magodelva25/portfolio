import React from 'react';
import info from './../info.json';

const Projects = () => {

    const { projects } = info;


  return (
    <div className='project-container'>
        <div className='visuals'>
            Visuals
        </div>
        <div className='description'>
            Description
        </div>  
    </div>
  )
}

export default Projects
