import React from 'react'
import Social from './components/Socials'
import '../../styles/Hero.css'

const Hero = () => {
    return (
        <div className='container'>
            <div className='hero'>
                <h2>Hello World, I'm Anthony 👋</h2>
                <h1>Front-end Web Developer</h1>
                <h3>
                    A passionate developer dedicated to creating stunning, user-centric websites and applications that deliver seamless and impactful digital experiences.
                </h3>
                <Social />
            </div>
        </div>
    )
}

export default Hero