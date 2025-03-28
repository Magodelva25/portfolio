import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import info from "../info.json";
import TagBadge from "./tagBadge";
import VisitButton from "./VisitButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = info.projects.find(
    (p) =>
      p.name.replace(/\s+/g, "-").toLowerCase() === projectName.toLowerCase()
  );

  if (!project) {
    return <h2>Proyecto no encontrado</h2>;
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [isOpen, setIsOpen] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
  };
  const hiddenContent = () => {
    setIsOpen(false);
  };
  const showingContent = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="project-detail">
          <div className="visual-carousel">
            <div className="project-carousel-card">
              {project.projectMedia?.map((object, index) => (
                <div
                  className="visual-carousel-img"
                  style={{ backgroundImage: `url(${object.smartphone})` }}
                  key={`${index}-${object}`}
                />
              ))}
            </div>
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
                  <span>{project.client}</span>
                  <span>{project.location}</span>
                </div>
              </div>
              <p>{project.description}</p>
              <Link to={project.url} target="_blank">
                <div className="visit-button">
                <VisitButton/>
                </div>
                </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={`project-detail${!isOpen ? "-hidden" : ""}`}>
          <div className="visual-carousel">
            <div className="project-carousel-card">
              {project.projectMedia?.map((object, index) => (
                <div
                  className="visual-carousel-img"
                  style={{ backgroundImage: `url(${object.url})` }}
                  key={index}
                />
              ))}
            </div>
          </div>
          {isOpen ? (
            <div className="project-content">
              <div className="project-title">
                <div className="close-handler" onClick={hiddenContent}>
                  <ArrowForwardIosIcon className="close-icon" />
                </div>
                <h2>{project.name}</h2>
                <p>{project.year}</p>
              </div>
              <div className="project-description">
                <div className="description-header">
                  <div className="project-tags">
                    {project.keywords?.map((keyword, i) => (
                      <TagBadge
                        key={`${project.name}-${i}`}
                        content={keyword}
                      />
                    ))}
                  </div>
                  <div className="important-data">
                    <span>{project.client}</span>
                    <span>{project.location}</span>
                  </div>
                </div>
                <p>{project.description}</p>
                <Link to={project.url} target="_blank">
                <div className="visit-button">
                <VisitButton/>
                </div>
                </Link>
              </div>
              </div>
          ) : (
            <div className="handler-content" onClick={showingContent}>
              <span>Info</span>
              <ArrowBackIosIcon className="content-icon" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
