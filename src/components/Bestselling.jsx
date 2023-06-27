import React from 'react'

import '../assets/css/bestselling.css'

export const Bestselling = () => {

    const status = 0;

    return (
        <>
            <div className="best-selling-section">

                <div className="best-selling-title">
                    <div>Best selling products</div>
                    <div className="best-selling-dropdown">
                        <select name="cars" id="cars">
                            <option value="volvo">This Month</option>
                            <option value="saab">Last 3 Months</option>
                            <option value="mercedes">Last 6 Months</option>
                            <option value="audi">Last 1 Year</option>
                        </select>
                    </div>
                </div>

                <div className="best-selling-table">
                    <table className='table table-responsive'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Sold</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Doms Pencil</td>
                                <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(30)}</td>
                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(200)}</td>
                                <td className={status > 0 ? 'instock' : 'outofstock'}>
                                    <div className="item-status">

                                        <span><i className="fa-solid fa-circle" style={{ 'font-size': '10px' }}></i></span>
                                        <div>
                                            {status > 0 ? 'In Stock' : 'Out of Stock'}
                                        </div>


                                    </div>
                                </td>
                            </tr>

                            <tr>


                                <td>Nataraj Pencil</td>
                                <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(30)}</td>
                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(200)}</td>
                                <td className={status > 0 ? 'instock' : 'outofstock'}>
                                    <div className="item-status">

                                        <span><i className="fa-solid fa-circle" style={{ 'font-size': '10px' }}></i></span>
                                        <div>
                                            {status > 0 ? 'In Stock' : 'Out of Stock'}
                                        </div>


                                    </div>
                                </td>
                            </tr>

                            <tr>


                                <td>Nataraj Pencil</td>
                                <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(30)}</td>
                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(200)}</td>
                                <td className={status > 0 ? 'instock' : 'outofstock'}>
                                    <div className="item-status">

                                        <span><i className="fa-solid fa-circle" style={{ 'font-size': '10px' }}></i></span>
                                        <div>
                                            {status > 0 ? 'In Stock' : 'Out of Stock'}
                                        </div>


                                    </div>
                                </td>
                            </tr>

                            <tr>


                                <td>Nataraj Pencil</td>
                                <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(30)}</td>
                                <td>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(200)}</td>
                                <td className={status > 0 ? 'instock' : 'outofstock'}>
                                    <div className="item-status">

                                        <span><i className="fa-solid fa-circle" style={{ 'font-size': '10px' }}></i></span>
                                        <div>
                                            {status > 0 ? 'In Stock' : 'Out of Stock'}
                                        </div>


                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}
