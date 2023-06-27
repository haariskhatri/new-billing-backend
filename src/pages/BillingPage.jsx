import React from 'react'
import { Sidemenu } from '../components/Sidemenu'
import { BillingSection } from '../components/BillingSection'

import '../assets/css/homepage.css';
import { Addresssection } from '../components/Addresssection';

export const BillingPage = () => {
    return (
        <>
            <div className="billing-page">
                <Sidemenu />

                <div className="right">
                    <div className="container">
                        <BillingSection />
                    </div>
                </div>
            </div>


        </>
    )
}
