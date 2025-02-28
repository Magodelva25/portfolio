import React from 'react';
import info from "../info.json";
import ProjectCard from './projectCard';

const Carousel = () => {
  const { projects } = info;
  return (
    <div className="carousel">
      {projects.map((project) => (
        <ProjectCard 
          key={project.name}
          name={project.name}
          year={project.year}
          coverPicture={project.coverPicture}
        />
      ))}
    </div>
  )
}

export default Carousel
