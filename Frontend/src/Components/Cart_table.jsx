import React, { useState } from "react"
import Cartitem_array from "./Array/Cartitem_array"

const increase = () => {

}
const decrease = () => {

}
const Cart_table = () => {
    var s=1;
    return (
        <>
            <div className="row ml-0 m-0" style={{ padding: '10px 0px 10px 0px' }}>
                <div className="col-12 m-0 p-0 cart_table_items">
                    {
                        Cartitem_array.map((elem) => {
                            const {  img, item_name, res_name, qty, price,time } = elem;
                            return (
                                <>
                                    <table className="row1 col-12 m-0 p-0 cart_table_items_row" style={{ display: 'flex' }}>
                                        <tr className="col-12 m-0 p-0">
                                            <td className="col-1 pt-1 pb-1" style={{ paddingLeft: '60px', paddingRight: '50px' }}>{s++}</td>
                                            <td className="col-1 pt-1 pb-1" style={{ paddingLeft: '20px', paddingRight: '5px' }}><img src={elem.img} style={{ height: '45px', width: '70px' }}></img></td>
                                            <td className="col-3 pt-1 pb-1" style={{ paddingLeft: '3px', paddingRight: '5px' }}>{elem.item_name}</td>
                                            <td className="col-2 pt-1 pb-1" style={{ paddingLeft: '40px', paddingRight: '40px' }}>{elem.res_name}</td>
                                            <td className="col-2 pt-1 pb-1" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                                <span style={{ width: '50px' }} className="increase" onClick={decrease}>&ensp;<b>-</b>&ensp;</span>&ensp;{elem.qty}&ensp;<span onClick={increase} className="increase">&ensp;<b>+</b>&ensp;</span>
                                            </td>
                                            <td className="col-1 pt-1 pb-1" style={{ paddingLeft: '50px', paddingRight: '0px' }}>{elem.price}</td>
                                            <td className="col-2 pt-1 pb-1" style={{ paddingLeft: '50px', paddingRight: '0px' }}>{elem.time}</td>
                                        </tr>
                                        <button className="btn-sm btn-danger mt-2 mb-2 ml-4" style={{height:'50px'}}><i class="fa-solid fa-trash"></i></button>
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

export default Cart_table