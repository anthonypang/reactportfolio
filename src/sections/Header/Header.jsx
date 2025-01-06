import React from 'react'

const navItems = [
    {
        name: 'Home',
        link: '#top'
    },
    {
        name: 'Projects',
        link: '#projects'
    },
    {
        name: 'Skills',
        link: '#skills'
    },
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Contact',
        link: '#contact'
    }
]

const Header = () => {
    return (
        <div id='header' className='header shadow'>
            <ul>
                {navItems.map((data, key) => {
                    return <li key={key}><a href={data.link}>{data.name}</a></li>
                })}
            </ul>
        </div>
    )
}

export default Header