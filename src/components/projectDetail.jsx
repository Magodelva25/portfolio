import React from "react";
import { useParams } from "react-router-dom";
import info from "../info.json";
import TagBadge from "./tagBadge";

const ProjectDetail = () => {
  const { projectName } = useParams(); // Capturamos el parámetro de la URL
  const project = info.projects.find(
    (p) =>
      p.name.replace(/\s+/g, "-").toLowerCase() === projectName.toLowerCase()
  );

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }

  return (
    <div className="project-detail">
      <div className="visual-carousel">
        {project.projectMedia?.map((object, index) => (
          <img className="visual-carousel-img" key={index} src={object.url} />
        ))}
      </div>
      <div className="project-content">
        <div className="project-title">
          <h2>{project.name}</h2>
          <p>{project.year}</p>
        </div>
        <div className="project-description">
        <div className="description-header">
          <div className="project-tags">
            {project.keywords?.map((keyword, i) => (
              <TagBadge key={`${project.name}-${i}`} content={keyword} />
            ))}
          </div>
          <div className="important-data">
            <p>{project.client}</p>
            <p>{project.location}</p>
          </div>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
