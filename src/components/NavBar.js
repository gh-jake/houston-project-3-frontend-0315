import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px', 
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
  }

const NavBar = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'green',
                    color: 'white'
                }}
            >
            Home
            </NavLink>
            <NavLink
                to="/contacts"
                exact
                style={link}
                activeStyle={{
                    background: 'green',
                    color: 'white'
                }}
            >
            Contacts
            </NavLink>
        </div>
    )
}

export default NavBar