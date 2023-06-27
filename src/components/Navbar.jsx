import React from 'react'

import '../assets/css/navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="container">
                    <ul className="list-unstyled elements">
                        <li>
                            <NavLink to='/'>
                                LOGO
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    )
}
