import React from "react";
import { useParams } from "react-router-dom";
import info from "../info.json"; // Importamos el JSON con los proyectos

const ProjectDetail = () => {
  const { projectName } = useParams(); // Capturamos el parámetro de la URL
  const project = info.projects.find((p) => p.name.replace(/\s+/g, "-").toLowerCase() === projectName.toLowerCase());

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div className="project-detail">
        <div className="visual">
            <img src={project.coverPicture} alt={project.name} />
        </div>
        <div className="project-title">
            <h2>{project.name}</h2>
            <p>{project.year}</p>
        </div>
        <div className="project-description">
            <p>{project.description}</p>
        </div>
      {/* <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a> */}
    </div>
  );
};

export default ProjectDetail;
