// LOGIN  PAGE
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import User_info_array from './Array/User_info_array';
import Admin_details from './Array/Admin_details';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(false)
    const [submitError, setSubmitError] = useState(true)
    const [wrong_password, setWrong_password] = useState(false)
    const [wrong_password_A, setWrong_password_A] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0 || password.length === 0) (
            seterror(true)
        )
        else (
            seterror(false)
        )
        const check = User_info_array.filter((currEle) => {
            return currEle.password === password && currEle.name === username
        })
        const check_A = Admin_details.filter((currEle) => {
            return currEle.password === password && currEle.name === username
        })

        if (check.length === 0 && password.length > 0 && username.length > 0) {
            setWrong_password(true)
        }
        else (
            setWrong_password(false)
        )


        if (check_A.length === 0 && password.length > 0 && username.length > 0) (
            setWrong_password_A(true)
        )
        else (
            setWrong_password_A(false)
        )

        if (username.length > 0 && password.length > 0) (
            setSubmitError(false)
        )
        else (
            setSubmitError(true)
        )
    }


    return (
        <>
            <div className='c1 container-fluid m-0 p-0' style={{ overflow: 'hidden' }}>
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
                <div className='row'>
                    <div className='col-12 m-0 p-0 LoginPage'>
                        <div className='col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xs-12' style={{}}>
                            <form className='col-7 pl-0 pr-0' style={{ width: '90%' }}>
                                <h1 className='login_heading'><b>Login</b></h1>
                                <div className='col-12' style={{ paddingLeft: '8%', paddingBottom: '10%', paddingTop: '5%' }}>
                                    <input className='login_input' placeholder="Username" type="text" onChange={e => setusername(e.target.value)}></input>
                                    {error && username.length <= 0 ?
                                        <label style={{ color: 'red' }}>Username is Required!</label> : ''}
                                    <input className='login_input' placeholder="Password" type="password" onChange={e => setpassword(e.target.value)}></input>
                                    {error && password.length <= 0 ?
                                        <label style={{ color: 'red' }}>Password is Required!</label> : ""}
                                    {wrong_password && wrong_password_A && password.length > 0 ?
                                        <label style={{ color: 'red' }}>Wrong Username or Password!</label> : ""}
                                </div>
                                <button className='login_button' onClick={handleSubmit}>
                                    {submitError || error || (wrong_password_A && wrong_password) ?
                                        (
                                            <NavLink className='esubmit' to=''>Submit</NavLink>
                                        ) : ('')
                                    }
                                    {!submitError && !wrong_password && !error?
                                        (
                                            <NavLink className='esubmit' to={'/Home2'}>Submit</NavLink>
                                        ) : ('')
                                    }
                                    {!submitError && !wrong_password_A && !error && wrong_password ?
                                        (
                                            <NavLink className='esubmit' to={'/Admin_control_panel'}>Submit</NavLink>
                                        ) : ('')
                                    }
                                </button>
                            </form>
                        </div>
                        <div className='col-xl-5 col-lg-4 col-md-3 col-sm-4 col-xs-1 m-0 p-0 d-none d-sm-none d-md-block'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;