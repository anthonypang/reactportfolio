import React from 'react'

const Project = (props) => {
    return (
        <div className='project shadow' data-aos="fade-up">
            <a href={props.link} target='_blank' rel='noreferrer'><img src={require('../../../images/' + props.image + '.png')} alt={props.image} /></a>
            <p>{props.name}</p>
            <p>{props.technologies.map((data) => {
                return <button className='shadow'>{data}</button>
            })}</p>
        </div>
    )
}

export default Project