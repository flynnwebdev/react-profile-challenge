import React from 'react'
import Nav from './Nav'

const menuItems = [
    { title: 'About Me', link: '#about-me' },
    { title: 'Favourite Foods', link: '#fav-foods' },
    { title: 'Contact Details', link: '#contact' }
]

export default function Header(props) {
    return (
        <header>
            <h1>Welcome To {props.name}'s Profile Page</h1>
            <Nav items={menuItems} />
        </header>        
    )
}
