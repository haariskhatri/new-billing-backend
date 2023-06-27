import React from 'react'
import { ProductChart } from './ProductChart'
import '../assets/css/chartsection.css'

export const ChartSection = () => {
    return (


        <>
            <div className="chart-section">

                <div className="dashboard-title">
                    Dashboard
                    <div className="analytics-text">
                        Analytics for your business
                    </div>
                </div>
                <div className="row">


                    <div className="col-md-6">
                        <div className="row main-cards g-4" >
                            <div className="col-lg-6">
                                <div className="inner-cards">
                                    <div className="inner-card-title">
                                        <span><i className="fa-solid fa-money-bill-trend-up"></i></span>
                                        <div className="title-small">
                                            Total Sales
                                        </div>
                                        <div className="inner-card-value">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="inner-cards">
                                    <div className="inner-card-title">
                                        <span><i className="fa-solid fa-hand-holding-dollar"></i></span>
                                        <div className="title-small">
                                            Total Expense
                                        </div>
                                        <div className="inner-card-value">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="inner-cards">
                                    <div className="inner-card-title">
                                        <span><i className="fa-solid fa-wallet"></i></span>
                                        <div className="title-small">
                                            Average Order Value
                                        </div>

                                        <div className="inner-card-value">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="inner-cards">
                                    <div className="inner-card-title">
                                        <span><i className="fa-solid fa-square-plus"></i></span>

                                        <div className="title-small">
                                            Products Added
                                        </div>

                                        <div className="inner-card-value">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="product-chart">
                            <ProductChart name='Sales ( This Month )' />
                        </div>
                    </div>
                </div>

            </div>


        </>

    )
}
