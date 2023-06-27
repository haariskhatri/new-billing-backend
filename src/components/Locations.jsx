import React from 'react'

import '../assets/css/locations.css'
import { NavLink } from 'react-router-dom'

export const Locations = () => {
    return (
        <>
            <div className="locations-section">
                <div className="location-title">
                    <div>
                        Locations
                    </div>

                    <NavLink to='/'>
                        <i className="fa-solid fa-diamond-turn-right"></i>
                    </NavLink>
                </div>

                <div className="location-card">
                    <ul className="list-unstyled">
                        <li>
                            <div className="location-name-section">
                                <div className='location-name'>Mumbai</div>
                                <div className="location-orders">50</div>
                            </div>
                            <div className="percentage-bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "50%", 'aria-valuenow': "5", "aria-valuemin": "0", "aria-valuemax": "100", "background-color": "#001C30" }}></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="location-name-section">
                                <div className='location-name'>Ahmedabad</div>
                                <div className="location-orders">20</div>
                            </div>
                            <div className="percentage-bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "20%", 'aria-valuenow': "5", "aria-valuemin": "0", "aria-valuemax": "100", "background-color": "#001C30" }}></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="location-name-section">
                                <div className='location-name'>Delhi</div>
                                <div className="location-orders">20</div>
                            </div>
                            <div className="percentage-bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "20%", 'aria-valuenow': "5", "aria-valuemin": "0", "aria-valuemax": "100", "background-color": "#001C30" }}></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </>

    )
}
