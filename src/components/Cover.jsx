import React from 'react'
import Social from './Social'

const Cover = () => {
    return (
        <div className='container'>
            <div className='cover'>
                <p>Hello World, I am</p>
                <h1>Anthony <span>Pang</span></h1>
                <h3><strong>Aspiring Software Engineer.</strong> A computer science graduate from the University of North Carolina at Charlotte</h3>
                <Social />
            </div>

        </div>
    )
}

export default Cover