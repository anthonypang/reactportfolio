import React from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="sectionsContainer">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
