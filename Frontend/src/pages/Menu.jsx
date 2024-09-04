// *Menu.jsx*
import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import { MdOutlineLogout, MdAccountCircle } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category_array from "../Components/Array/Category_array";
import { BsEmojiFrown } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { fetchCompanyDetails, fetchAllFoods, logout,findUser } from "../utils/utils";

const Menu = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [c, setc] = useState(false);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("My Account");


  const filterItem = (cateItem) => {
    setc(false);
    const updateItem = allFood.filter((currEle) => {
      return currEle.category === cateItem;
    });
    setData(updateItem);
    if (updateItem.length === 0) setc(true);
    else setc(false);
  };
  const filterItem1 = (res) => {
    const updateItem1 = allFood.filter((currEle) => {
      return currEle.restaurent === res;
    });
    setData(updateItem1);
    if (updateItem1.length === 0) setc(true);
    else setc(false);
  };

  //Hamburger Menu-------------
  const [isHamburger_MenuOpen, setIsHamburger_MenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsHamburger_MenuOpen(!isHamburger_MenuOpen);
  };

  //Refresh Function-----------
  const refreshMenu = () => {
    window.location.reload();
  };

  let textInput = React.createRef();

  function handleClick() {
    var cat = textInput.current.value;
    var name = textInput.current.value;

    const updateItem = allFood.filter((currEle) => {
      return (
        currEle.category.toLowerCase().includes(cat.toLowerCase()) ||
        currEle.name.toLowerCase().includes(name.toLowerCase())
      );
    });
    setData(updateItem);
  }

  const myAccount = async () => {
    findUser().then((user) => {
      if (user.username) {
        navigate("/My_account");
      } else {
        alert("You have to Login first!");
      }
    })
  };

  useEffect(() => {
    // Find user
    findUser().then((user) => {
      if (user.username) {
        setAccount(user.username.split(" ")[0]);
      } else {
        setAccount("My Account");
      }
    });
  }, []);



  const [text] = useTypewriter({
    words: [
      "Veg dish",
      "Non-veg dish",
      "Biriyani",
      "Burger",
      "Pizza",
      "Dessert",
      "Drinks",
      "Healthy food",
      "Bengali dish",
      "South Indian dish",
    ],
    loop: {},
  });

  const AllFood = () => {
    setData(allFood);
    setc(false);
  };

  // Logout API
  const handleLogout = async () => {
    setLoading(true);
    try {
      if ((await logout()) === "Logout successfully") {
        setTimeout(() => {
          setLoading(false);
          navigate("/Home2");
          setAccount("My Account");
        }, 3000);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  const [companyName, setcompanyName] = useState();
  const [companyEmail, setcompanyEmail] = useState();
  const [companyPhone, setcompanyPhone] = useState();
  const [companyFB, setcompanyFB] = useState();
  const [companyInsta, setcompanyInsta] = useState();

  const [allFood, setallFood] = useState([]);

  useEffect(() => {
    fetchCompanyDetails().then((company) => {
      setcompanyName(company.name.toUpperCase());
      setcompanyEmail(company.email);
      setcompanyPhone(company.phone);
      setcompanyFB(company.fbLink);
      setcompanyInsta(company.instaLink);
    });

    fetchAllFoods().then((response) => {
      setallFood(response);
      setData(response);
    });
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0" style={{ width: "100%" }}>
        <div className="row">
          {/* Navbar----------------------------------------- */}
          <div className="col-12 m-0 p-0">
            <Navbar expand="lg" className="bg-body-tertiary header m-0 p-0">
              <div className="col-12 m-0 p-0" style={{ display: "flex" }}>
                {/*Logo & Name------------------ */}
                <div
                  className="col-xl-3 col-lg-4 col-md-4 ml-0 col-sm-5 col-xs-11 logo m-0 p-0"
                  style={{ display: "flex" }}
                >
                  <div className="col-1"></div>
                  <div className="col-lg-2 col-md-1 col-sm-1 col-xs-1">
                    <h4>
                      <i
                        className="fa-solid fa-burger"
                        style={{ paddingTop: "10px" }}
                      ></i>
                    </h4>
                  </div>
                  <div
                    className="col-lg-9 col-md-11 col-sm-11 col-xs-11"
                    style={{
                      paddingTop: "2%",
                      fontFamily: "brittany",
                      display: "flex",
                      justifyContent: "left",
                    }}
                  >
                    <h4>{companyName}</h4>
                  </div>
                </div>
                {/* Menu------------------------------------------------ */}
                <div
                  className="col-xl-4 col-lg-6 col-sm-6 m-0 pt-2 d-none d-xl-block"
                  style={{ paddingTop: "10px" }}
                >
                  <div className="col-3 header_menu">
                    <NavLink className="header_menu pt-0" to={"/Home2"}>
                      Home
                    </NavLink>
                  </div>
                  <div className="col-3 header_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      About&nbsp;Us
                    </Link>
                  </div>
                  <div className="col-3 header_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Contact&nbsp;Us
                    </Link>
                  </div>
                  <div className="col-3 header_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Offers
                    </Link>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-7 col-md-6 col-sm-5 col-xs-4 pt-2 d-none d-sm-block">
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 m-0 p-0 d-none d-sm-block"
                    style={{ float: "left" }}
                  >
                    <NavLink
                      className="m-0 p-0"
                      to={"/My_cart"}
                      style={{ paddingTop: "0px" }}
                    >
                      <FaCartArrowDown
                        className="header_menu"
                        style={{ height: "25px", width: "25px" }}
                      />
                      <span
                        className="header_menu"
                        style={{ fontSize: "15px" }}
                      >
                        &nbsp;&nbsp;My&nbsp;Cart
                      </span>
                    </NavLink>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 m-0 p-0 d-none d-sm-none d-md-block"
                    style={{ float: "left" }}
                  >
                    <NavLink
                      className="m-0 p-0"
                      to={"/My_order"}
                      style={{ paddingTop: "0px" }}
                    >
                      <FaBagShopping
                        className="header_menu"
                        style={{ height: "22px", width: "22px" }}
                      />
                      <span
                        className="header_menu"
                        style={{ fontSize: "15px" }}
                      >
                        &nbsp;&nbsp;My&nbsp;Orders
                      </span>
                    </NavLink>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 m-0 p-0 d-sm-none  d-md-none d-none d-lg-block"
                    style={{ float: "left" }}
                  >
                    <NavLink
                      className="m-0 p-0"
                      to={"/My_account"}
                      style={{ paddingTop: "0px" }}
                    >
                      <MdAccountCircle
                        className="header_menu"
                        style={{ height: "25px", width: "25px" }}
                        onClick={myAccount}
                      />
                      <span
                        className="header_menu"
                        style={{ fontSize: "15px" }}
                        onClick={myAccount}
                      >
                         &nbsp;&nbsp;{account}
                      </span>
                    </NavLink>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-2 m-0 p-0"
                    style={{ float: "left"}}
                  >
                    {account !== "My Account" ? (
                      <>
                        <MdOutlineLogout
                          className="header_menu"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <span className="header_menu" onClick={handleLogout}>
                          &nbsp;&nbsp;Log&nbsp;out
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>

                {/*Hamburger Menu--------------------------------------- */}
                <div
                  className="col-lg-1 col-md-2 col-sm-2 col-xs-1 d-block d-xl-none"
                  style={{ paddingTop: "1%" }}
                  onClick={toggleMenu}
                >
                  {isHamburger_MenuOpen ? (
                    <RxCross2 style={{ color: "white" }} />
                  ) : (
                    <GiHamburgerMenu style={{ color: "white" }} />
                  )}
                </div>
              </div>
            </Navbar>

            <div
              className="col-12 Menu_background "
              style={{ display: "flex" }}
            >
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-3 col-3"></div>
              {/* Search bar------------------------------------------------------------------- */}
              <div className="search-bar-container col-xl-4 col-lg-4 col-md-5 col-sm-7 col-7">
                <p style={{ fontSize: "25px" }}>
                  Flavors at Your Fingertips !!
                </p>
                <p style={{ fontSize: "25px" }}>
                  Grab your favourite
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "red",
                      marginLeft: "10px",
                    }}
                  >
                    <i>{text}</i>
                  </span>
                  <span style={{ color: "green" }}>
                    <Cursor />
                  </span>
                </p>

                <div className="input-wrapper div">
                  <FaMagnifyingGlass id="search-icon" />
                  <input
                    placeholder="Search Item..."
                    id="item"
                    className="Search_input"
                    ref={textInput}
                  />
                </div>
                <div className="mt-3">
                  <Link to="section" spy={true} smooth={true} duration={500}>
                    <button
                      class="btn btn-outline-success"
                      type="submit"
                      onClick={handleClick}
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
              {isHamburger_MenuOpen && (
                <div
                  className="drop_down d-none d-sm-none d-md-block d-lg-none"
                  style={{ marginRight: "2%" }}
                >
                  <div className="drop_down_menu" onClick={refreshMenu}>
                    Home
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      About Us
                    </Link>
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Contact Us
                    </Link>
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      My Account
                    </Link>
                  </div>
                </div>
              )}
              {isHamburger_MenuOpen && (
                <div className="drop_down d-none d-sm-none d-md-none d-lg-block">
                  <div className="drop_down_menu" onClick={refreshMenu}>
                    Home
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      About Us
                    </Link>
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
              {isHamburger_MenuOpen && (
                <div className="drop_down d-none d-sm-block d-md-none d-lg-none">
                  <div className="drop_down_menu" onClick={refreshMenu}>
                    Home
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      About Us
                    </Link>
                  </div>
                  <div className="drop_down_menu">
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Contact Us
                    </Link>
                  </div>
                  <div className="drop_down_menu">
                    <NavLink
                      to={"/My_order"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      style={{
                        color: "white",
                        paddingTop: "5px",
                        paddingBottom: "0px",
                      }}
                    >
                      My Order
                    </NavLink>
                  </div>
                  <div className="drop_down_menu">
                    <NavLink
                      to={"/My_account"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      style={{
                        color: "white",
                        paddingTop: "5px",
                        paddingBottom: "0px",
                      }}
                    >
                      My Account
                    </NavLink>
                  </div>
                </div>
              )}
              {isHamburger_MenuOpen && (
                <div
                  className="drop_down d-block d-sm-none d-md-none d-lg-none"
                  style={{ marginRight: "7%" }}
                >
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                    onClick={refreshMenu}
                  >
                    Home
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      About Us
                    </Link>
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Contact Us
                    </Link>
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <NavLink
                      to={"/My_cart"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      style={{
                        color: "white",
                        paddingTop: "5px",
                        paddingBottom: "0px",
                      }}
                    >
                      My Cart
                    </NavLink>
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <NavLink
                      to={"/My_order"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      style={{
                        color: "white",
                        paddingTop: "5px",
                        paddingBottom: "0px",
                      }}
                    >
                      My Order
                    </NavLink>
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <NavLink
                      to={"/My_account"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      style={{
                        color: "white",
                        paddingTop: "5px",
                        paddingBottom: "0px",
                      }}
                    >
                      My Account
                    </NavLink>
                  </div>
                  <div
                    className="drop_down_menu"
                    style={{ paddingBottom: "10px" }}
                  >
                    <Link to="section" spy={true} smooth={true} duration={500}>
                      Log out
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <h4 className="text-center pt-2">Food Menu Chart</h4>
            <hr></hr>

            <div
              className="row m-0 pl-3 pr-3"
              style={{ padding: "10px 0px 20px 0px" }}
            >
              <div
                className="mt-0 float-left pb-3"
                style={{ height: "50%", width: "9%" }}
              >
                <img
                  src="/Image/Food_Items/thali.jpg"
                  alt=""
                  className=""
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    borderTopLeftRadius: "0.20rem",
                    borderTopRightRadius: "0.20rem",
                    borderRadius: "150px",
                    height: "60px",
                    width: "50%",
                    margin: "auto",
                  }}
                  onClick={AllFood}
                ></img>
                <div
                  className="flex flex-col justify-center items-center m-0 p-0"
                  style={{ height: "20%", width: "100%" }}
                >
                  <h6 className="mt-1" onClick={() => setData(allFood)}>
                    All Food
                  </h6>
                </div>
              </div>

              {Category_array.map((elem) => {
                const { img, name } = elem;
                return (
                  <>
                    <div
                      className="mt-0 float-left pb-3"
                      style={{ height: "50%", width: "9%" }}
                    >
                      <img
                        src={img}
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                          borderTopLeftRadius: "0.20rem",
                          borderTopRightRadius: "0.20rem",
                          borderRadius: "150px",
                          height: "60px",
                          width: "50%",
                          margin: "auto",
                        }}
                        onClick={() => filterItem(name)}
                      ></img>
                      <div
                        className="flex flex-col justify-center items-center m-0 p-0"
                        style={{ height: "20%" }}
                      >
                        <h6 className="mt-1" onClick={() => filterItem(name)}>
                          {name}
                        </h6>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <Element name="section" className="element">
              {!c ? (
                <div className="container-fluid">
                  <div className="col-lg-12 pt-1 pl-5 pr-5 mt-3">
                    {data.map((elem) => {
                      const { image, name, category, price, restaurent } = elem;
                      return (
                        <>
                          <Card
                            name={name}
                            image={image}
                            price={price}
                            restaurent={restaurent}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="pt-5 pb-5 m-auto" style={{ width: "30%" }}>
                  <div
                    className="pb-5 pt-5"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
                      borderRadius: "50px",
                    }}
                  >
                    <h5 style={{ color: "red" }}>Sorry! No Item Present</h5>
                    <div className="pt-3">
                      <BsEmojiFrown
                        style={{ height: "30px", width: "30px", color: "red" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </Element>

            {/* Footer-------------------------------------------------------------------------------------------- */}
            <Element name="section" className="element">
              <Footer
                phone={companyPhone}
                email={companyEmail}
                fbLink={companyFB}
                instaLink={companyInsta}
              />
            </Element>
          </div>
        </div>
      </div>
      {loading && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          ></div>
          <Loader />
        </>
      )}
    </>
  );
};

export default Menu;