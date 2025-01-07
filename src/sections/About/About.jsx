import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="container about-container" data-aos="fade-up">
      <div className="about">
        <div>
          <h1>About Me</h1>
          <p>
            Hi, I’m Anthony Pang, a Front-End Engineer with 2 years of
            experience building sleek, user-focused web applications. I thrive
            on creating performant, reusable components and optimizing
            interfaces for both functionality and aesthetics.
            <br />
            <br />
            What excites me most is solving challenging problems and turning
            ideas into seamless digital experiences.
            <br />
            <br />
            I’m passionate about staying ahead of industry trends and
            collaborating with teams to deliver impactful solutions.
          </p>
          <br />
          <hr />
          <br />
          <h3>Technologies</h3>
          <div className="technologies">
            <ul>
              <li>TypeScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
            </ul>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className="aboutImageContainer">
          <img src={require("../../images/coding.jpg")} alt="computer" />
        </div>
      </div>
    </div>
  );
};

export default About;
