import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidemenu } from '../components/Sidemenu'
import { ProductChart } from '../components/ProductChart'
import { ChartSection } from '../components/ChartSection'

import '../assets/css/homepage.css'
import { Locations } from '../components/Locations'
import { Bestselling } from '../components/Bestselling'

export const Homepage = () => {
    return (
        <>
            <div className="home-page">


                <Sidemenu />


                <div className="right">
                    <ChartSection />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <Locations />
                            </div>
                            <div className="col-lg-9">
                                <Bestselling />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
