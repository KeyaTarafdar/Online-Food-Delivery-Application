// SIGN  UP

import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Sign_up = () => {

    // const initialValues = { username: "", email: "", password: "", phone: "", confirm_password: "" };
    // const [formValues, setFormValues] = useState(initialValues);
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const [phone, setphone] = useState('')
    const [usernameerror, setusernameerror] = useState(false)
    const [phoneerror, setphoneerror] = useState(false)
    const [passworderror, setpassworderror] = useState(false)
    const [submitError, setSubmitError] = useState(true)
    const [notsame, setnotsame] = useState(false)
    const [wrongphone, setwrongphone] = useState(false)
    const [wrongpasswordlength, setwrongpasswordlength] = useState(false)


    const handleChange = (e) => {
        // console.log(e.target);
        // const { name, value } = e.target;
        // setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
        e.preventDefault();

        // Username is required-----------------------
        if (username.length == 0) (
            setusernameerror(true)
        )
        else (
            setusernameerror(false)
        )

        // Password is Required!---------------------------
        if (password.length == 0) (
            setpassworderror(true)
        )
        else (
            setpassworderror(false)
        )

        // Phone no. is Required!-------------------------
        if (phone.length == 0) (
            setphoneerror(true)
        )
        else (
            setphoneerror(false)
        )

        // Password is not same!---------------------------
        if (password != confirm_password) (
            setnotsame(true)
        )
        else (
            setnotsame(false)
        )

        // Wrong Phone no!-------------------------------
        if (phone.length > 0 && phone.length != 10) (
            setwrongphone(true)
        )
        else (
            setwrongphone(false)
        )

        // Password should have atleast 6 character!-------------------------
        if (password.length > 0 && password.length < 6) (
            setwrongpasswordlength(true)
        )
        else (
            setwrongpasswordlength(false)
        )

        if ((usernameerror === false || passworderror === false && password.length >= 6 && password === confirm_password || phoneerror === false && phone.length === 10)) (
            setSubmitError(false)
        )
    }

    return (
        <>
            <div className='c1 container-fluid m-0 p-0' style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <Navbar expand="lg" className="bg-body-tertiary header">
                        <div className='col-lg-12 m-0 p-0 logo m-0 p-0' style={{ display: 'flex' }}>
                            <div className='col-lg-2 col-md-2 col-sm-1 col-xs-1'>
                                <h4><i className="fa-solid fa-burger" style={{ paddingTop: '10px' }}></i></h4>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-5 col-xs-5' style={{ paddingTop: '0.5%', fontFamily: 'brittany' }}>
                                <h4>BON&nbsp;&nbsp;APETITE</h4>
                            </div>
                            <div className='col-lg-7 col-md-4 col-xs-6'></div>
                        </div>
                    </Navbar>
                </div>
                <div className='row'>
                    <div className='col-12 m-0 p-0 LoginPage'>
                        <div className='col-lg-9 col-md-10 col-sm-12 col-xs-9'>
                            <form className='col-xs-9 col-sm-7 col-xl-5 col-lg-6 pl-0 pr-0' style={{ marginTop: '30px' }} onClick={handleChange}>
                                <h1 className='login_heading'><b>Sign Up</b></h1>
                                <div className='col-12' style={{ paddingLeft: '8%', paddingBottom: '10%', paddingTop: '5%', paddingBottom: '15px' }}>
                                    <input className='login_input'
                                        name='username'
                                        // value={formValues.username}
                                        placeholder="Username"
                                        type="text"
                                        required=""
                                        onChange={e => setusername(e.target.value)}
                                    ></input>
                                    {usernameerror && username.length <= 0 ?
                                        <label style={{ color: 'red' }}>Username is Required!</label> : ""}

                                    <input className='login_input'
                                        name='email'
                                        // value={formValues.email}
                                        placeholder="Email Id (optional)"
                                        type="email"
                                    ></input>

                                    <input className='login_input'
                                        name='phone'
                                        // value={formValues.phone}
                                        placeholder="Phone No."
                                        type="text"
                                        required=""
                                        onChange={e => setphone(e.target.value)}
                                    ></input>
                                    {phone.length > 0 && phone.length < 10 ?
                                        <label style={{ color: 'red' }}>Wrong Phone no!</label> : ""}
                                    {phoneerror && phone.length <= 0 ?
                                        <label style={{ color: 'red' }}>Phone no. is Required!</label> : ""}

                                    <input className='login_input'
                                        name='password'
                                        // value={formValues.password}
                                        placeholder="Password"
                                        type="password"
                                        required=""
                                        onChange={e => setpassword(e.target.value)}
                                    ></input>
                                    {password.length > 0 && password.length < 6 ?
                                        <label style={{ color: 'red' }}>Password should have atleast 6 character!</label> : ""}
                                    {passworderror && password.length <= 0 ?
                                        <label style={{ color: 'red' }}>Password is Required!</label> : ""}

                                    <input className='login_input'
                                        name='confirm_password'
                                        // value={formValues.confirm_password}
                                        placeholder="Confirm Password"
                                        type="password"
                                        required=""
                                        onChange={e => setconfirm_password(e.target.value)}
                                    ></input>
                                    {passworderror && confirm_password.length <= 0 ?
                                        <label style={{ color: 'red' }}>Confirm your password!</label> : ""}
                                    {confirm_password.length > 0 && password != confirm_password ?
                                        <label style={{ color: 'red' }}>Password is not same!</label> : ""}
                                </div>
                                {submitError || notsame || passworderror || wrongpasswordlength || phoneerror || wrongphone || usernameerror ? (
                                    <button className='login_button'><NavLink className='esubmit' to=''>Submit</NavLink></button>) : (<button className='login_button'><NavLink className='esubmit' to={'/Home2'}>Submit</NavLink></button>)}
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6 d-none d-sm-none d-md-none d-lg-none'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign_up;