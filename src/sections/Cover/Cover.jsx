import React from 'react'
import Social from './components/Social'

const Cover = () => {
    return (
        <div className='container'>
            <div className='cover'>
                <p>Hello World, I am</p>
                <h1>Anthony <span>Pang</span></h1>
                <h3>
                    <strong>Software Engineer </strong>
                    with over 2 years of experience building scalable and user-centric web applications using React, TypeScript, and modern web technologies. 
                    Let’s build something exceptional together!
                </h3>
                <Social />
            </div>
        </div>
    )
}

export default Cover