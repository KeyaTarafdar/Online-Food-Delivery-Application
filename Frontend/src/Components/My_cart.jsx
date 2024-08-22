import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { FaBagShopping } from "react-icons/fa6";
import NavLink from "react-bootstrap/esm/NavLink";
import Cart_table from "./Cart_table";
const My_cart = () => {
    return (
        <>
            {/* Navbar------------------------------------------------------------------------------------------- */}
            <div className='row'>
                <Navbar expand="lg" className="bg-body-tertiary header col-12" style={{ display: 'flex' }}>
                    <div className='col-lg-10 col-md-9 col-sm-9 col-8 m-0 p-0 logo m-0 p-0' style={{ display: 'flex' }}>
                        <div className='col-lg-2 col-md-2 col-sm-1 col-xs-8'>
                            <h4><i className="fa-solid fa-burger" style={{ paddingTop: '10px' }}></i></h4>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-5 col-xs-5' style={{ paddingTop: '0.5%', fontFamily: 'brittany' }}>
                            <h4>BON&nbsp;&nbsp;APETITE</h4>
                        </div>
                        <div className='col-lg-7 col-md-4'></div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-3 col-4 m-0 p-0' style={{ float: 'left' }}>
                        <NavLink to href={'/My_order'} style={{ paddingTop: '0px' }}><FaBagShopping className='header_menu' style={{ height: '22px', width: '22px' }} /><span className='header_menu'>&nbsp;&nbsp;My&nbsp;Orders</span></NavLink>
                    </div>
                </Navbar>
            </div>
            <div className="my_cart_background m-0 p-0">
                <div className="row" style={{ padding: '40px 20px 20px 20px' }}>
                    <div className="col-7" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                        <table className="col-12">
                            <tr className="col-12 cart_table">
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Serial No</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Image</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Item Name</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Restaurant Name</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Quantity</th>
                                <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Price</th>
                                <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Time</th>
                            </tr>
                        </table>
                        <Cart_table />
                    </div>
                </div>
                <div className="col-7 m-0 p-0" style={{display:'flex'}}>
                <div className="col-9"></div>
                    <button className="btn btn-success pl-5 pr-5 pt-2 pb-2 ml-2" style={{marginLetf:'50px'}}><h5>Order Now</h5></button>
                </div>
            </div>
        </>
    )
}
export default My_cart