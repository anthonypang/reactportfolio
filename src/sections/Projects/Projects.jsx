import React from "react";
import Project from "./components/Project";
import "./Projects.css";
import { projectItems, featuredProject } from "../../data/data";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <section className="featured-project-section">
        <div className="section-header">
          <span className="section-subtitle">Featured Project</span>
          <h2 className="section-title">{featuredProject.name}</h2>
        </div>

        <div className="featured-project-content">
          <div className="featured-project-info">
            <p className="project-description">{featuredProject.description}</p>

            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-tags">
                {featuredProject.technologies.map((technology, key) => (
                  <span key={key} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <button
                className="btn-primary"
                onClick={() => window.open(featuredProject.demo, "_blank")}
              >
                <span>View Demo</span>
                <i className="fas fa-external-link-alt"></i>
              </button>
              <button
                className="btn-secondary"
                onClick={() => window.open(featuredProject.code, "_blank")}
              >
                <span>View Code</span>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          <div className="featured-project-gallery">
            {featuredProject.image.map((image, key) => (
              <img
                key={key}
                src={require("../../images/" + image + ".png")}
                alt={`${featuredProject.name} screenshot ${key + 1}`}
                className="featured-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="projectsContainer container">
        <div className="projects" data-aos="fade-up">
          <h1 className="heading">Projects</h1>
          {projectItems.map((data, key) => {
            return (
              <Project
                key={key}
                image={data.image}
                name={data.name}
                description={data.description}
                link={data.link}
                lazy={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
