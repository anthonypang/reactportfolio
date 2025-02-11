import React, { useState, useEffect } from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import "./App.css";
import Menu from "./sections/Menu/Menu";
import Experience from "./sections/Experience/Experience";

const App = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Update class on the <body> element
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} toggleTheme={toggleTheme} />
      {showMenu ? (
        <Menu toggleMenu={toggleMenu} toggleTheme={toggleTheme} />
      ) : (
        <>
          <div className="sectionsContainer">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
