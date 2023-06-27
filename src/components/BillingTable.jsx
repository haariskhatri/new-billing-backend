import React, { useState } from 'react'
import { Addresssection } from './Addresssection';



export const BillingTable = () => {

    const [item, setitem] = useState([{
        itemCode: '',
        itemName: '',
        itemPrice: '',
        itemQty: '1',
        itemDiscount: '',
    }])


    const [customer, setcustomer] = useState({
        customerId: '',
        customerName: '',
        customerCity: '',
        customerPinCode: '',
        customerPhoneNumber: ''
    })

    const addNewItem = (e) => {
        const newItem = {
            itemCode: '',
            itemName: '',
            itemPrice: '',
            itemQty: '1',
            itemDiscount: '',
        };

        setitem(prevItems => [...prevItems, newItem]);

    };

    const getDiscount = (discount, amount) => {
        return (discount / 100) * amount;
    }

    const handleItemChange = (event, index) => {
        var { name, value } = event.target;

        const updatedItems = [...item];
        updatedItems[index][name] = value;
        // updatedItems[index].name = value;
        // console.log(updatedItems[index][name])
        setitem(updatedItems);
    }



    const handleCustomerChange = (e) => {
        const { name, value } = e.target;


        setitem((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const deleteItem = (index) => {
        setitem(prev => prev.filter((_, i) => i != index))
    }




    const date = new Date();
    return (
        <>
            <div className="billing-table">

                <div className="container invoice">
                    <div className="row">
                        <div className="col-md-11 left">

                            <div className="table-header text-center">
                                Invoice
                            </div>

                            <div className="date-section">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="date-fields">
                                            <div className="row-title">
                                                Invoice : #
                                            </div>
                                            <div className="row-title">
                                                Date : {date.toDateString()}
                                            </div>
                                        </div>


                                        <div className="address-fields">
                                            Bill To :

                                            <table className="table table-responsive">
                                                <thead>

                                                    <tr>
                                                        <td className='input-title '>Name</td>
                                                        <td><input type="text" name='itemName' autoFocus /></td>
                                                    </tr>

                                                    {/* <tr>
                                                        <td className='input-title address-textarea'>Address</td>
                                                        <td><textarea /></td>
                                                    </tr> */}

                                                    <tr>
                                                        <td className='input-title'>City</td>
                                                        <td><input type="text" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td className='input-title'>State</td>
                                                        <td><input type="text" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td className='input-title'>Pin code</td>
                                                        <td><input type="text" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td className='input-title'>Phone Number</td>
                                                        <td><input type="text" maxLength={10} /></td>
                                                    </tr>
                                                </thead>


                                            </table>
                                        </div>

                                    </div>
                                    <div className="col-md-4 text-end ">

                                    </div>
                                </div>
                            </div>



                            <table className="table table-responsive table-hover bill-table">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th className='number-field'>Code</th>
                                        <th>Description</th>
                                        <th className='number-field'>Price</th>
                                        <th className='number-field'>Qty</th>
                                        <th className='number-field' >Discount(%)</th>
                                        <th className='number-field' >Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {console.log(item)}
                                    {
                                        item.map((ele, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td >
                                                    <input
                                                        type="number"
                                                        name='itemCode'
                                                        value={ele.itemCode}
                                                        onChange={(event) => handleItemChange(event, index)}
                                                        maxLength={5}
                                                        autoFocus
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="text"
                                                        name='itemName'
                                                        value={ele.itemName}
                                                        onChange={(event) => handleItemChange(event, index)}
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="number"
                                                        name='itemPrice'
                                                        value={ele.itemPrice}
                                                        onChange={(event) => handleItemChange(event, index)}
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="number"
                                                        name='itemQty'
                                                        value={ele.itemQty}
                                                        onChange={(event) => handleItemChange(event, index)}
                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="number"
                                                        name='itemDiscount'
                                                        value={ele.itemDiscount}
                                                        onChange={(event) => handleItemChange(event, index)}
                                                        min={0}
                                                        max={100}
                                                        onKeyDown={(e) => { console.log(e.key); if (e.key === 'Enter') { addNewItem() } }}


                                                    />
                                                </td>

                                                <td>
                                                    <input
                                                        type="number"
                                                        name='itemAmount'

                                                        value={
                                                            ele.itemPrice > 0 && ele.itemDiscount > 0 ? (ele.itemPrice * ele.itemQty) - getDiscount(ele.itemDiscount, ele.itemPrice * ele.itemQty) : (ele.itemPrice * ele.itemQty)
                                                        }
                                                        onKeyDown={(e) => { console.log(e.key); if (e.key === 'Enter') { addNewItem() } }}

                                                        readOnly
                                                    />
                                                </td>

                                                <td>
                                                    <button onClick={() => deleteItem(index)}><i className="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        ))}


                                </tbody>
                            </table>
                            <div className="add-button text-end ">
                                <button className='add-button'  onClick={addNewItem}>Add</button>
                            </div>

                            <div className="totals-section">
                                <table className='totals-table table table-responsive'>
                                    <tbody>
                                        <tr>
                                            <td className='input-ti'>Shipping</td>
                                            <td><input type="text" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* <div className=" bill-right">

                            <div className="bill-right-fields">
                                <label htmlFor="items">Items</label>
                                <input type="number" name='items' value='10' readOnly />
                            </div>

                            <div className="bill-right-fields">
                                <label htmlFor="shipping">Shipping</label>
                                <input type="text" name='shipping' />
                            </div>

                            <div className="bill-right-fields">
                                <label htmlFor="less">Less</label>
                                <input type="text" name='less' />

                            </div>

                            <div className="bill-right-fields">
                                <label htmlFor="totalamount">Total</label>
                                <input type="number" name='totalamount' readOnly />

                            </div>

                            <button className='review-invoice-button'>Review Invoice</button>




                        </div> */}


                    </div>
                </div>


            </div >
        </>
    )
}
