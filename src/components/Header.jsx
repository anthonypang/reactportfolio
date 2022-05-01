import React from 'react'
import logo from '../images/AP-logos_transparent.png'

const Header = () => {
    return (
        <div id='header' className='header shadow'>
            <a className='logo' href='#top'><img src={logo} alt='logo' /></a>
            <ul>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>

        </div>
    )
}

export default Header