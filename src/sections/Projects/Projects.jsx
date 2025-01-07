import React from "react";
import Project from "./components/Project";
import projectItems from "../../projectItems.json";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <div className="projects" data-aos="fade-up">
        <h1 className="heading">Projects</h1>
        {projectItems.map((data, key) => {
          return (
            <Project
              key={key}
              image={data.image}
              name={data.name}
              technologies={data.technologies}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
