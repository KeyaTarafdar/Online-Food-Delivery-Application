import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { FaBagShopping } from "react-icons/fa6";
import NavLink from "react-bootstrap/esm/NavLink";
import Order_table from "./Order_table";
const My_order = () => {
    return (
        <>
            {/* Navbar------------------------------------------------------------------------------------------- */}
            <div className='row'>
                <Navbar expand="lg" className="bg-body-tertiary header">
                    <div className='col-lg-12 m-0 p-0 logo m-0 p-0' style={{ display: 'flex' }}>
                        <div className='col-lg-2 col-md-2 col-sm-1 col-xs-1'>
                            <h4><i className="fa-solid fa-burger" style={{ paddingTop: '10px' }}></i></h4>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-5 col-xs-5' style={{ paddingTop: '0.5%', fontFamily: 'brittany' }}>
                            <h4>BON&nbsp;&nbsp;APETITE</h4>
                        </div>
                        <div className='col-lg-7 col-md-4'></div>
                    </div>
                </Navbar>
            </div>
            <div className="my_cart_background m-0 p-0">
            <div className="row" style={{ padding: '40px 20px 20px 20px' }}>
                    <div className="col-11" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                        <table className="col-11">
                            <tr className="col-12 Order_table">
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Serial No</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Order id</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Image</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Item Name</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Restaurant Name</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Quantity</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Price</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Address</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Contact our delivery agent</th>
                            </tr>
                        </table>
                        <Order_table />
                    </div>
                </div>
                <div className="col-7 m-0 p-0" style={{display:'flex'}}>
                </div>
            </div>
        </>
    )
}
export default My_order