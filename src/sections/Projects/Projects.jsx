import React from "react";
import "./Projects.css";
import { projectItems, featuredProject } from "../../data/data";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Project</h2>

        <div className="featured-project fade-in">
          <div className="project-content">
            <h3>{featuredProject.name}</h3>
            <p className="project-description">{featuredProject.description}</p>

            <div className="tech-stack">
              {featuredProject.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  />
                </svg>
              </a>
              <a
                href={featuredProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="project-gallery">
            {featuredProject.images?.map((img, idx) => (
              <img
                key={idx}
                src={require("../../images/" + img)}
                alt={`${featuredProject.name} screenshot ${idx + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: "4rem" }}>
          Other Projects
        </h2>
        <div className="projects-grid">
          {projectItems.map((project, idx) => (
            <div
              key={idx}
              className="project-card fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {project.image && (
                <img
                  src={require("../../images/" + project.image)}
                  alt={project.name}
                  className="card-image"
                  loading="lazy"
                />
              )}
              <div className="card-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack-container">
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
