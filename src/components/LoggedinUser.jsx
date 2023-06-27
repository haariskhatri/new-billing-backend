import React from 'react'

import '../assets/css/loggedinuser.css';
import man from '../assets/images/man.jpg';

export const LoggedinUser = () => {
    return (
        <>
            <div className="logged-in-user-section">
                <span><i className="fa-solid fa-user-tie"></i></span>
                <div className="user-details">
                    <div className="user-name">
                        Haaris Khatri
                    </div>
                    <div className="user-role">
                        Owner
                    </div>
                </div>
            </div>
        </>
    )
}
