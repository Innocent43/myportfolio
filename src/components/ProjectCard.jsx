import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div className="projectcard">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        viewproject
      </a>
    </div>
  );
}

export default ProjectCard;
