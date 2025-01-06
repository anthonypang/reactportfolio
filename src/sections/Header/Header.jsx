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
            <div className='container'>
                <ul className='navItems'>
                    {navItems.map((data, key) => {
                        return <li className='navItem' key={key}><a className='navLink' href={data.link}>{data.name}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header