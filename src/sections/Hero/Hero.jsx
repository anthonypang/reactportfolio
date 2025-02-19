import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          <button
            onClick={(e) => handleNavClick(e, "projects")}
            className="cta-primary"
          >
            View Projects
          </button>
          <button
            onClick={(e) => handleNavClick(e, "contact")}
            className="cta-secondary"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-blob"></div>
      </div>
    </section>
  );
};

export default Hero;
