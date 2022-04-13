import React from 'react'
import Header from './components/Header'
import Cover from './components/Cover'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import About from './components/About'
import './App.css'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Cover />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Footer />
    </>
  )
}

export default App
