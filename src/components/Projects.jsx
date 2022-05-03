import React from 'react'
import Project from './Project'
import projectItems from '../projectItems.json'



const Projects = () => {
    return (
        <div id='projects'>


            <div className='container' data-aos="fade-up">

                <h1 className='heading shadow'>Projects</h1>

                {projectItems.map((data, key) => {
                    return <Project key={key} image={data.image} name={data.name} technologies={data.technologies} link={data.link} />
                })}






            </div>
        </div>
    )
}

export default Projects