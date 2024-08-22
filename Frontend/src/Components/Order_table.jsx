import React, { useState } from "react"
import Orderitem_array from "./Array/Orderitem_array";

const Order_table = () => {
    return (
        <>
            <div className="row ml-0 m-0" style={{ padding: '10px 0px 10px 0px' }}>
                <div className="col-12 m-0 p-0 cart_table_items">
                    {
                        Orderitem_array.map((elem) => {
                            const { serial_no, img, item_name, res_name, qty, price } = elem;
                            return (
                                <>
                                    <table className="row1 col-12 m-0 p-0 Order_table_items_row" style={{ display: 'flex' }}>
                                        <tr className="col-11 m-0 p-0 cart_table_items_row">
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>{elem.serial_no}</th>
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>_Order Id_</th>
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}><img src={elem.img} style={{ height: '45px', width: '70px' }}></img></th>
                                            <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>{elem.item_name}</th>
                                            <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>{elem.res_name}</th>
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>{elem.qty}</th>
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>{elem.price}</th>
                                            <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>_Address_</th>
                                            <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px' }}>_Phone no_</th>
                                        </tr>
                                        <div className="col-1"><button className="btn-sm btn-warning mt-1">Cancle Order</button></div>
                                    </table>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Order_table