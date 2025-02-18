import React from "react";
import "./About.css";
import { skillItems } from "../../data/data";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="bio">
            <p>
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products using modern web technologies.
            </p>
            <p>
              My experience spans full-stack development, with a particular
              focus on frontend technologies and user experience. I enjoy
              turning complex problems into simple, beautiful, and intuitive
              solutions.
            </p>
          </div>

          <div className="skills-container">
            <h3>Technologies I work with</h3>
            <div className="skills-grid">
              {skillItems.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{skill.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
