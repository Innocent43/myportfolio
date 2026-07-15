import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description:
        "A todo app built with React, useState, and useEffect for fetching data.",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      id: 2,
      title: "Shopping Cart",
      description:
        "A cart app with add/remove/quantity logic using lifted state.",
      link: "https://github.com/yourusername/shopping-cart",
    },
    {
      id: 3,
      title: "E-commerce Site",
      description:
        "A frontend e-commerce site built with HTML, CSS, and JavaScript.",
      link: "https://github.com/yourusername/ecommerce-site",
    },
  ];
  return (
    <>
      <div className="project-div">
        <h1>My Projects</h1>
        <div className="projects-flex">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              description={project.description}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
