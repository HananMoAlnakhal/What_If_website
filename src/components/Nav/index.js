import React from 'react'
import {Nav, NavLink, } from './NavElement'

const NavBar = ({drag}) => {
    return (
        <>
             <Nav>
                <NavLink to='/'>WHAT IF ‽</NavLink>
            </Nav>
            {/* <NavIcon onClick={drag}>
                <Bars />
                <p>Tech</p>
            </NavIcon>  */}
        </>
    )
}

export default NavBar;
