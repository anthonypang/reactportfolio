import React from "react";
import "./Experience.css";
import { workExperience } from "../../data/data";

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-subtitle">Career Path</span>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div className="timeline">
        {workExperience.map((job, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-content">
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="company">{job.company}</span>
              </div>

              <div className="job-duration">
                <span>{job.duration}</span>
                <span className="location">{job.location}</span>
              </div>

              <ul className="responsibilities">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>

              <div className="tech-tags">
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
  );
};

export default Experience;
