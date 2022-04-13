import React from 'react'
import Social from './Social'

const Cover = () => {
    return (
        <div className='container'>
            <div className='cover'>
                <p>Hello World, I am</p>
                <h1>Anthony <span>Pang</span></h1>
                <p><strong>Aspiring Software Developer.</strong> I'm a Computer Science student at the University of North Carolina at Charlotte</p>
                <Social />
            </div>

        </div>
    )
}

export default Cover