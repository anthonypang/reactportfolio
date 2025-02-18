import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          <span className="greeting">Hi, I'm Anthony</span>
          <span className="role">Software Engineer</span>
        </h1>
        <p className="hero-description fade-in">
          I build exceptional digital experiences with a focus on user
          interaction and scalable architecture.
        </p>
        <div className="hero-cta fade-in">
          <a href="#projects" className="cta-primary">
            View Projects
          </a>
          <a href="#contact" className="cta-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-blob"></div>
      </div>
    </section>
  );
};

export default Hero;
