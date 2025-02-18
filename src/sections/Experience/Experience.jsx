import React from "react";
import "./Experience.css";
import { workExperience } from "../../data/data";

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="timeline-item fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="company">{job.company}</span>
                </div>

                <div className="job-meta">
                  <span className="duration">{job.duration}</span>
                  <span className="location">{job.location}</span>
                </div>

                <ul className="responsibilities">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
