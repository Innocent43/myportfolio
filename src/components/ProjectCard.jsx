import React from "react";

function ProjectCard({ title, description, link, image }) {
  return (
    <div className="projectcard">
      <img src={image} alt={description} className="projectcard-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="projectcard-link"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
