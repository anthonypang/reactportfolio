import React from 'react'

const Skill = (props) => {
    return (
        <div className='skillItem'>
            <img src={require('../images/' + props.image + '.png')} alt={props.image} />
            <p>{props.skill}</p>
        </div>
    )
}

export default Skill