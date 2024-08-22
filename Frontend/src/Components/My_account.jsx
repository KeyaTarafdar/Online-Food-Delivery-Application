import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineLogout } from "react-icons/md";
import { PiPencilSimpleLineBold } from "react-icons/pi";
const My_account = () => {

    const [username, setusername] = useState(false)

    const update_username = () => {
        setusername(true)
    }
    const handleSubmit = () => {
        setusername(false)
    }

    return (
        <>
            {/* Navbar------------------------------------------------------------------------------------------- */}
            <div className='row'>
                <Navbar expand="lg" className="bg-body-tertiary header col-12" style={{ display: 'flex' }}>
                    <div className='col-lg-10 col-md-9 col-sm-9 col-9 m-0 p-0 logo m-0 p-0' style={{ display: 'flex' }}>
                        <div className='col-lg-2 col-md-2 col-sm-1 col-xs-8'>
                            <h4><i className="fa-solid fa-burger" style={{ paddingTop: '10px' }}></i></h4>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-5 col-xs-5' style={{ paddingTop: '0.5%', fontFamily: 'brittany' }}>
                            <h4>BON&nbsp;&nbsp;APETITE</h4>
                        </div>
                        <div className='col-lg-7 col-md-4'></div>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-3 col-3 m-0 p-0' style={{ float: 'left' }}>
                        <MdOutlineLogout className='header_menu' style={{ height: '22px', width: '22px' }} /><span className='header_menu'>&nbsp;&nbsp;Log&nbsp;Out</span>
                    </div>
                </Navbar>
            </div>
            <div className="col-12 my_cart_background m-0 p-0">
                <div className="col-12 m-0 p-0 pt-5" style={{ display: 'flex' }}>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-7">
                        <h2 className="col-7 col-md-5 col-sm-7 m-auto">Hi Priya!</h2>
                    </div>
                </div>
                <div className="col-12 ml-0 pl-0 mt-5 col-md-10 col-lg-12 pb-0" style={{ display: 'flex' }}>
                    <div className="col-1 col-lg-0"></div>
                    <div className="col-10 col-lg-5 m-0 p-0 my_account_info pt-5 pb-5">
                        <div className="col-12" style={{ display: 'flex' }}>
                            <div className="col-3 pt-2"><h5>Name: </h5></div>
                            <div className="col-8 pt-2" style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}>_Username_</div>
                        </div>
                        <div className="col-12 pt-3" style={{ display: 'flex' }}>
                            <div className="col-3 pt-2"><h5>Phone: </h5></div>
                            <div className="col-8 pt-2" style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}>_Phone no_</div>
                        </div>
                        <div className="col-12 pt-3" style={{ display: 'flex' }}>
                            <div className="col-3 pt-2"><h5>Email: </h5></div>
                            <div className="col-8 pt-2" style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}>_Email Id_</div>
                        </div>
                        <div className="col-12 pt-3" style={{ display: 'flex' }}>
                            <div className="col-3 pt-2"><h5>Address: </h5></div>
                            <div className="col-8 pt-2" style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}>_Address_</div>
                        </div>
                        <div style={{ marginTop: '5%' }}><b>Update Details</b> <PiPencilSimpleLineBold onClick={update_username} className="pencil" style={{ height: '25px', width: '25px' }} /></div>
                    </div>
                    {username ?
                        <div className="col-lg-5 update mt-0 pt-5 mt-0 pb-3 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                            <div className="col-12" style={{ display: 'flex' }}>
                                <div className="col-4 pl-0 pt-0"><h5>Enter Username: </h5></div>
                                <input className="col-8 pt-0" placeholder="Enter New Username..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                            </div>
                            <div className="col-12 pt-3" style={{ display: 'flex' }}>
                                <div className="col-4 pl-0 pt-0"><h5>Enter Phone no: </h5></div>
                                <input className="col-8 pt-0" placeholder="Enter New Phone no..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                            </div>
                            <div className="col-12 pt-3" style={{ display: 'flex' }}>
                                <div className="col-4 pl-0 pt-0"><h5>Enter Email Id: </h5></div>
                                <input className="col-8 pt-0" placeholder="Enter New Email Id..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                            </div>
                            <div className="col-12 pt-3" style={{ display: 'flex' }}>
                                <div className="col-4 pl-0 pt-0"><h5>Enter Address: </h5></div>
                                <input className="col-8 pt-0" placeholder="Enter New Address..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                            </div>
                            <button className="btn btn-success" style={{ marginLeft: '70%', marginTop: '6%' }} onClick={handleSubmit}>Submit</button>
                        </div>
                        : ""}
                </div>
                {username ?
                    <div className="col-10 col-md-9 mt-5 update col-4 pt-5 pb-3 d-lg-none d-xl-none d-block d-sm-block" style={{ marginLeft: '8%' }}>
                        <div className="col-12 pl-0" style={{ display: 'flex' }}>
                            <div className="col-4 pl-0 pt-2"><h5>Enter Username: </h5></div>
                            <input className="col-8 pt-0" placeholder="Enter New Username..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                        </div>
                        <div className="col-12 pt-3 pl-0" style={{ display: 'flex' }}>
                            <div className="col-4 pl-0 pt-2"><h5>Enter Phone no: </h5></div>
                            <input className="col-8 pt-0" placeholder="Enter New Phone no..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                        </div>
                        <div className="col-12 pt-3 pl-0" style={{ display: 'flex' }}>
                            <div className="col-4 pl-0 pt-2"><h5>Enter Email Id: </h5></div>
                            <input className="col-8 pt-0" placeholder="Enter New Email Id..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                        </div>
                        <div className="col-12 pt-3 pl-0" style={{ display: 'flex' }}>
                            <div className="col-4 pl-0 pt-2"><h5>Enter Address: </h5></div>
                            <input className="col-8 pt-0" placeholder="Enter New Address..." style={{ borderStyle: 'solid', borderRadius: '5px', height: '50px' }}></input>
                        </div>
                        <button className="btn btn-success" style={{ marginLeft: '70%', marginTop: '6%' }} onClick={handleSubmit}>Submit</button>
                    </div>
                    : ""}
            </div>
        </>
    )
}
export default My_account