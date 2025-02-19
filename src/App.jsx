import React, { useState, useEffect } from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} />
      <Hero />
      <main className="main-content">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
