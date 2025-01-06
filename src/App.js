import React from 'react'
import Header from './sections/Header/Header'
import Cover from './sections/Cover/Cover'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Skills from './sections/Skills/Skills'
import About from './sections/About/About'
import Footer from './sections/Footer/Footer'
import './App.css'



const App = () => {
  return (
    <>
      <Header />
      <div className='sectionsContainer'>
        <Cover />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
