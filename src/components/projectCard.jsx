import React from "react";
import { Link } from "react-router-dom"; // Importamos Link para la navegación
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectCard = ({ name, year, coverPicture }) => {
  const projectUrl = `/projects/${name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Link to={projectUrl} className="project-card">
      <div>
        <img loading="lazy" className="project-card-image" src={coverPicture} alt={name}  />
      </div>
      <div className="project-card-handler">
        <div className="description">
          <h4>{name}</h4>
          <p>{year}</p>
        </div>
        <div className="project-visit">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
