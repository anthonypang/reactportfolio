import React from 'react'
import skillItems from '../skillItems.json'
import Skill from './Skill'

const Skills = () => {
    return (
        <div id='skills' className='container' data-aos="fade-up">

            <h1 className='heading shadow'>Skills</h1>
            <div className='skills'>
                {skillItems.map((data) => {
                    return <Skill image={data.image} skill={data.skill} />
                })}
            </div>

        </div>
    )
}

export default Skills