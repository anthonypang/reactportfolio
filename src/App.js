import React from 'react'
import Header from './sections/Header/Header'
import Cover from './sections/Cover/Cover'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Skills from './sections/Skills/Skills'
import About from './sections/About/About'
import './App.css'
import Footer from './sections/Footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Cover />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
