import React from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación


const ProjectCard = ({ name, coverPicture }) => {
  const projectUrl = `/projects/${name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="project-card">
      <Link to={projectUrl} className={`project-card-img ${name}`} style={{backgroundImage:`url(${coverPicture})`}} />
    </div>
  );
};

export default ProjectCard;
