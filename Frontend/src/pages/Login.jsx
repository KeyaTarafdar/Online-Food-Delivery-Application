// LOGIN  PAGE
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) seterror(true);
    else seterror(false);

    // Login API
    try {
      if (email.length > 0 && password.length > 0) {
        let response = await axios.post("http://localhost:8000/users/login", {
          email,
          password,
        });
        if (response.data == "Login successfully") {
          navigate("/Home2");
        } else {
          alert(response.data);
        }
      }
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <>
      <div
        className="c1 container-fluid m-0 p-0"
        style={{ overflow: "hidden" }}
      >
        {/* Navbar------------------------------------------------------------------------------------------- */}
        <div className="row">
          <Navbar expand="lg" className="bg-body-tertiary header">
            <div
              className="col-lg-12 m-0 p-0 logo m-0 p-0"
              style={{ display: "flex" }}
            >
              <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1">
                <h4>
                  <i
                    className="fa-solid fa-burger"
                    style={{ paddingTop: "10px" }}
                  ></i>
                </h4>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-5 col-xs-5"
                style={{ paddingTop: "0.5%", fontFamily: "brittany" }}
              >
                <h4>BON&nbsp;&nbsp;APETITE</h4>
              </div>
              <div className="col-lg-7 col-md-4"></div>
            </div>
          </Navbar>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0 LoginPage">
            <div
              className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xs-12"
              style={{}}
            >
              <form className="col-7 pl-0 pr-0" style={{ width: "90%" }}>
                <h1 className="login_heading">
                  <b>Login</b>
                </h1>
                <div
                  className="col-12"
                  style={{
                    paddingLeft: "8%",
                    paddingBottom: "10%",
                    paddingTop: "5%",
                  }}
                >
                  <input
                    className="login_input"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                  {error && email.length == 0 ? (
                    <label style={{ color: "red" }}>Email is Required!</label>
                  ) : null}
                  <input
                    className="login_input"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                  ></input>
                  {error && password.length == 0 ? (
                    <label style={{ color: "red" }}>
                      Password is Required!
                    </label>
                  ) : null}
                </div>
                <input
                  type="submit"
                  className="login_button"
                  onClick={handleSubmit}
                />
              </form>
            </div>
            <div className="col-xl-5 col-lg-4 col-md-3 col-sm-4 col-xs-1 m-0 p-0 d-none d-sm-none d-md-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
