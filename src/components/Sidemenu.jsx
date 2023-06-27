import React from 'react'

import '../assets/css/sidemenu.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo-bill.png'
import { LoggedinUser } from './LoggedinUser'

export const Sidemenu = () => {
    return (
        <>
            <div className="side-menu">

                <div className="logo">
                    <img src={Logo} alt="company-logo" />
                </div>

                <div className="list-title">
                    MAIN MENU
                </div>

                <ul className="list-unstyled menu-options">
                    <li>
                        <NavLink to='/home' >
                            <span><i className="fa-solid fa-boxes-stacked"></i></span>
                            Dashboard

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/billing'>
                            <span><i className="fa-solid fa-cart-plus"></i></span>
                            Billing
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span><i className="fa-regular fa-user"></i></span>
                            Customers
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span><i className="fa-solid fa-magnifying-glass-dollar"></i></span>
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span><i className="fa-solid fa-chart-simple"></i></span>
                            Analytics
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/'>
                            <span><i className="fa-solid fa-print"></i></span>
                            Print Label
                        </NavLink>
                    </li>
                </ul>

                <div className="list-title">
                    ACCOUNT
                </div>

                <ul className="list-unstyled account-section" >
                    <li>
                        <NavLink to='/'>
                            <span><i className="fa-solid fa-right-from-bracket"></i></span>
                            Logout
                        </NavLink>
                    </li>
                </ul>

                <LoggedinUser />
            </div >

        </>
    )
}
