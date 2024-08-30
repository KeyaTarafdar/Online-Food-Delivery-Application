import React, { useState, useEffect } from "react";
import { FaUser, FaGift } from "react-icons/fa";
import { FaRegCircleStop, FaMagnifyingGlass } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsEmojiLaughing } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import User_info_array from "../Components/Array/User_info_array";
import Admin_order_array from "../Components/Array/Admin_order_array";
import Table_row from "../Components/Table_row";
import Restaurent_list_array from "../Components/Array/Restaurent_list_array";
import Update_Res from "../Components/Update_Res";
import Category_array from "../Components/Array/Category_array";
import Update_Category from "../Components/Update_Category";
import Food_array from "../Components/Array/Food_array";
import Update_Food from "../Components/Update_Food";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Admin_control_panel = () => {
  var serial_food_item = 1,
    serial_food_category = 1,
    serial_res = 1,
    serial_user = 1,
    serial_order = 1,
    serial_delivery = 1;

  const navigate = useNavigate();

  const [companyName, setcompanyName] = useState();

  const [user_info, setUser_info] = useState(false);
  const UserInfo = () => {
    setData(User_info_array);
    setUser_info(true);
    setOrder_info(false);
    setDelivery_boy_info(false);
    setUpdate(false);
    setUpdate_web_details(FaRegCircleStop);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [order_info, setOrder_info] = useState(false);
  const OrderInfo = () => {
    setData(Admin_order_array);
    setOrder_info(true);
    setUser_info(false);
    setDelivery_boy_info(false);
    setUpdate(false);
    setUpdate_web_details(false);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [deliver_boy_info, setDelivery_boy_info] = useState(false);
  const DeliverBoyInfo = () => {
    setOrder_info(false);
    setUser_info(false);
    setDelivery_boy_info(true);
    setUpdate(false);
    setUpdate_web_details(false);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);

    getDeliveryBoy();
  };

  const [update, setUpdate] = useState(false);
  const UpdateInfo = () => {
    setOrder_info(false);
    setUser_info(false);
    setUpdate(true);
    setDelivery_boy_info(false);
    setUpdate_web_details(false);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [update_web_details, setUpdate_web_details] = useState(false);
  const UpdateWebInfo = () => {
    setOrder_info(false);
    setUser_info(false);
    setUpdate(false);
    setDelivery_boy_info(false);
    setUpdate_web_details(true);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [update_web_details_phone, setUpdate_web_details_phone] =
    useState(false);
  const UpdateWebInfo_Phone = () => {
    setOrder_info(false);
    setUser_info(false);
    setUpdate(false);
    setDelivery_boy_info(false);
    setUpdate_web_details_phone(true);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_name(false);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [update_web_details_mail, setUpdate_web_details_mail] = useState(false);
  const UpdateWebInfo_Mail = () => {
    setOrder_info(false);
    setUser_info(false);
    setUpdate(false);
    setDelivery_boy_info(false);
    setUpdate_web_details_phone(false);
    setUpdate_web_details_mail(true);
    setUpdate_web_details_name(false);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [update_web_details_name, setUpdate_web_details_name] = useState(false);
  const UpdateWebInfo_Name = async () => {
    setOrder_info(false);
    setUser_info(false);
    setUpdate(false);
    setDelivery_boy_info(false);
    setUpdate_web_details_phone(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_name(true);
    setAdd_res(false);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  // Update company name---------------------------------------------------
  const [newcompanyName, setnewcompanyName] = useState();
  const handleSubmitName = async () => {
    setUpdate_web_details_phone(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_name(false);

    try {
      setLoading(true);
      await axios.put(
        "http://localhost:8000/admins/updatecompanyname",
        { name: newcompanyName },
        { withCredentials: true }
      );
      setTimeout(() => {
        setLoading(false);
        alert("Company Name updated successfully");
        fetchCompanyDetails();
      }, 3000);
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  // Update company email---------------------------------------------------
  const [newcompanyEmail, setnewcompanyEmail] = useState();
  const handleSubmitEmail = async () => {
    setUpdate_web_details_phone(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_name(false);

    try {
      setLoading(true);
      await axios.put(
        "http://localhost:8000/admins/updatecompanyemail",
        { email: newcompanyEmail },
        { withCredentials: true }
      );
      setTimeout(() => {
        setLoading(false);
        alert("Email updated successfully");
      }, 3000);
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  // Update company phone no---------------------------------------------------
  const [newcompanyPhone, setnewcompanyPhone] = useState();
  const handleSubmitPhone = async () => {
    setUpdate_web_details_phone(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_name(false);

    try {
      setLoading(true);
      await axios.put(
        "http://localhost:8000/admins/updatecompanyphone",
        { phone: newcompanyPhone },
        { withCredentials: true }
      );
      setTimeout(() => {
        setLoading(false);
        alert("Phone updated successfully");
      }, 3000);
    } catch (err) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  const [add_res, setAdd_res] = useState(false);
  const AddRes = () => {
    setData(Restaurent_list_array);
    setOrder_info(false);
    setUser_info(false);
    setUpdate(false);
    setDelivery_boy_info(false);
    setAdd_res(true);
    setUpdate_food_category(false);
    setUpdate_food_item(false);
  };

  const [update_food_category, setUpdate_food_category] = useState(false);
  const UpdateFoodCategori = () => {
    setData(Category_array);
    setUpdate_food_category(true);
    setUpdate_web_details_name(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_phone(false);
    setUpdate_web_details(false);
    setUpdate(false);
    setUpdate_food_item(false);
  };

  const [update_food_item, setUpdate_food_item] = useState(false);
  const UpdateFoodItem = () => {
    setData(Food_array);
    setUpdate_food_item(true);
    setUser_info(false);
    setOrder_info(false);
    setDelivery_boy_info(false);
    setUpdate(false);
    setUpdate_web_details(false);
    setUpdate_food_category(false);
    setAdd_res(false);
    setUpdate_web_details_name(false);
    setUpdate_web_details_mail(false);
    setUpdate_web_details_phone(false);
  };

  // Search Event--------------------------------------------------
  const [data, setData] = useState();
  let textInput = React.createRef();
  function handleSearch() {
    var search_item = textInput.current.value;

    //For User
    if (user_info === true) {
      serial_user = 1;
      const updateItem = User_info_array.filter((currEle) => {
        return (
          currEle.name.toLowerCase() === search_item.toLowerCase() ||
          currEle.id === search_item
        );
      });
      console.log(updateItem);
      setData(updateItem);
    }

    //For Order
    if (order_info === true) {
      serial_order = 1;
      const updateItem1 = Admin_order_array.filter((currEle) => {
        return (
          currEle.name.toLowerCase() === search_item.toLowerCase() ||
          currEle.id === search_item
        );
      });
      setData(updateItem1);
    }

    //For Delivery_boy
    if (deliver_boy_info === true) {
      serial_delivery = 1;
      const updateItem2 = deliveryBoy.filter((currEle) => {
        return (
          currEle.username.toLowerCase() === search_item.toLowerCase()
          // currEle.id === search_item
        );
      });
      setdeliveryBoy(updateItem2);
    }

    //For Restaurent
    if (add_res === true) {
      serial_res = 1;
      const updateItem3 = Restaurent_list_array.filter((currEle) => {
        return (
          currEle.name.toLowerCase() === search_item.toLowerCase() ||
          currEle.id === search_item ||
          currEle.address.toLowerCase() === search_item.toLowerCase()
        );
      });
      setData(updateItem3);
    }

    //For Food Item
    if (update_food_item === true) {
      serial_food_item = 1;
      const updateItem4 = Food_array.filter((currEle) => {
        return (
          currEle.name.toLowerCase() === search_item.toLowerCase() ||
          currEle.categori.toLowerCase() === search_item.toLowerCase() ||
          currEle.res.toLowerCase() === search_item.toLowerCase()
        );
      });
      setData(updateItem4);
    }

    //For Food Category
    if (update_food_category === true) {
      serial_food_category = 1;
      const updateItem5 = Category_array.filter((currEle) => {
        return currEle.name.toLowerCase() === search_item.toLowerCase();
      });
      setData(updateItem5);
    }
  }

  const [loading, setLoading] = useState(false);

  // Logout Admin--------------------------------------------------
  const logoutAdmin = async () => {
    setLoading(true);
    try {
      let response = await axios.post(
        "http://localhost:8000/admins/logout",
        {},
        { withCredentials: true }
      );

      setTimeout(() => {
        setLoading(false);

        if (response.data == "Logout successfully") {
          navigate("/Login");
        } else {
          alert(response.data);
        }
      }, 3000);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  // Fetching company details--------------------------------------------------
  const fetchCompanyDetails = async () => {
    let response = await axios.get("http://localhost:8000/companyDetails");
    setcompanyName(response.data[0].name.toUpperCase());
  };

  // Fetching admin details--------------------------------------------------
  const [adminName, setadminName] = useState();
  const fetchAdmin = async () => {
    try {
      let response = await axios.get("http://localhost:8000/admins/getadmin", {
        withCredentials: true,
      });
      setadminName(response.data.username);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Fetching Delivery boy--------------------------------------------------
  const [deliveryBoy, setdeliveryBoy] = useState([]);
  const getDeliveryBoy = async () => {
    try {
      let response = await axios.get(
        "http://localhost:8000/admins/getdeliveryboy",
        { withCredentials: true }
      );
      setdeliveryBoy(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchCompanyDetails();
    fetchAdmin();
    getDeliveryBoy();
  }, []);

  return (
    <>
      <div className="Admin_control" style={{ height: "97vh" }}>
        {/* Navbar------------------------------------------------------------------------------------------- */}
        <div className="row m-0 p-0">
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
                <h4>{companyName}</h4>
              </div>
              {/* Searching---------------------------------------------------------- */}
              <div className="col-lg-7 col-md-4 d-flex">
                <div className="col-5"></div>
                <div
                  className="search-bar-container1 col-xl-5 col-lg-5 col-md-5 col-sm-7 col-7"
                  style={{ width: "40%" }}
                >
                  <div className="input-wrapper1">
                    <FaMagnifyingGlass id="search-icon" />
                    <input
                      placeholder="Search here..."
                      className="Search_input1"
                      ref={textInput}
                    />
                  </div>
                </div>
                <div className="col-2 mt-0">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </Navbar>
        </div>
        <div className="container-fluid m-0 p-0 d-flex">
          {/* Side_menu----------------------------------------------------------------------------------------------- */}
          <div className="col-2 m-0 p-0 panel">
            <div className="col-12 dashboard m-0 p-0">
              <div className="col-6 admin_img ">
                <FaUser
                  style={{ height: "50px", width: "50px", paddingTop: "20px" }}
                />
              </div>
              <div className="admin_name p-0">{adminName}</div>
              <div className="admin_deg ">Admin</div>
            </div>
            <div className="">
              <div className="admin_menu">
                <div className="col-2">
                  <FaUser className="admin_icon" />
                </div>
                <div
                  className="col-7 m-0 p-0"
                  style={{ cursor: "-webkit-grab", cursor: "grab" }}
                  onClick={UserInfo}
                >
                  User Info&emsp;&emsp;&emsp;
                </div>
              </div>
              <div className="admin_menu">
                <div className="col-2 pt-0">
                  <FaGift className="admin_icon" />
                </div>
                <div
                  className="col-7 m-0 p-0"
                  style={{ cursor: "-webkit-grab", cursor: "grab" }}
                  onClick={OrderInfo}
                >
                  Order DB&emsp;&emsp;&emsp;
                </div>
              </div>
              <div className="admin_menu">
                <div className="col-2 pt-0">
                  <MdDeliveryDining className="admin_icon" />
                </div>
                <div
                  className="col-7 m-0 p-0"
                  style={{ cursor: "-webkit-grab", cursor: "grab" }}
                  onClick={DeliverBoyInfo}
                >
                  Delivery Boy Info
                </div>
              </div>
              <div className="admin_menu">
                <div className="col-2 pt-0">
                  <GrUpdate className="admin_icon" />
                </div>
                <div
                  className="col-7 m-0 p-0"
                  style={{ cursor: "-webkit-grab", cursor: "grab" }}
                  onClick={UpdateInfo}
                >
                  Update&emsp;&emsp;&emsp;&emsp;
                </div>
              </div>
              <div className="admin_menu">
                <div className="col-2 pt-0">
                  <RiLogoutCircleRLine className="admin_icon" />
                </div>
                <div
                  className="col-7 m-0 p-0"
                  style={{ cursor: "-webkit-grab", cursor: "grab" }}
                  onClick={logoutAdmin}
                >
                  Log Out&ensp;&emsp;&emsp;&emsp;
                </div>
              </div>
            </div>
          </div>

          {/* Default page--------------------------------------------------------------------------------------------------------- */}
          {!user_info &&
          !order_info &&
          !deliver_boy_info &&
          !update &&
          !update_web_details &&
          !add_res &&
          !update_food_category &&
          !update_food_item ? (
            <div
              className="col-10 admin_default_page"
              style={{ height: "98vh" }}
            >
              <b>
                <h1 style={{ margin: "auto", paddingTop: "22%" }}>
                  Welcome to {companyName}!
                </h1>
              </b>
              <div className="pt-4">
                <BsEmojiLaughing style={{ height: "50px", width: "50px" }} />
              </div>
            </div>
          ) : null}

          {/* User Info----------------------------------------------------------------------------------------------------------------- */}
          {user_info ? (
            <div className="col-10 m-0 p-0">
              <div className="col-12 m-0 p-0 d-flex">
                <div
                  className="head col-1 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Serial no
                </div>
                <div
                  className="head col-2 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Username
                </div>
                <div
                  className="head col-1 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  User Id
                </div>
                <div
                  className="head col-2 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Phone no
                </div>
                <div
                  className="head col-2 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Email
                </div>
                <div
                  className="head col-2 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Address
                </div>
                <div
                  className="head col-2 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Account Password
                </div>
              </div>
              {data.map((elem) => {
                const { name, phone, email, password, address, id } = elem;
                return (
                  <>
                    <div
                      className="col-12 m-0 p-0 d-flex pt-1 pb-1"
                      style={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {serial_user++}
                      </div>
                      <div
                        className="col-2"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.name}
                      </div>
                      <div
                        className="col-1"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.id}
                      </div>
                      <div
                        className="col-2"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.phone}
                      </div>
                      <div
                        className="col-2"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.email}
                      </div>
                      <div
                        className="col-2"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.address}
                      </div>
                      <div
                        className="col-2"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {elem.password}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : null}

          {/* Order Info------------------------------------------------------------------------------------------------------------------------ */}
          {order_info ? (
            <div className="col-10 m-0 p-0">
              <div className="col-12 m-0 p-0 d-flex">
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Serial no
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Username
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Phone no
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Address
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Time
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Order Id
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Delivery Status
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Payment Status
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Payment Mode
                </div>
                <div
                  className="head col-2 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Payment Id
                </div>
                <div
                  className="head col-1 pt-2 pb-0"
                  style={{ border: "1px solid black" }}
                >
                  Order Info
                </div>
              </div>
              {data.map((elem) => {
                const {
                  name,
                  phone,
                  address,
                  time,
                  id,
                  delivery_sts,
                  payment_sts,
                  payment_mode,
                  payment_id,
                  food,
                  qty,
                  res,
                } = elem;
                return (
                  <>
                    <Table_row
                      serial={serial_order++}
                      name={elem.name}
                      phone={elem.phone}
                      address={elem.address}
                      time={elem.time}
                      id={elem.id}
                      delivery_sts={elem.delivery_sts}
                      payment_sts={elem.payment_sts}
                      payment_mode={elem.payment_mode}
                      payment_id={elem.payment_id}
                      food={elem.food}
                      qty={elem.qty}
                      res={elem.res}
                      price={elem.price}
                    />
                  </>
                );
              })}
            </div>
          ) : null}

          {/* Delivery boy info--------------------------------------------------------------------------------------------------------- */}
          {deliver_boy_info ? (
            <div className="col-10 m-0 p-0">
              <div className="col-12 m-0 p-0 d-flex">
                <div
                  className="head col-1 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Serial no
                </div>
                <div
                  className="head col-3 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Name
                </div>
                <div
                  className="head col-3 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Phone no
                </div>
                <div
                  className="head col-5 pt-2 pb-2"
                  style={{ border: "1px solid black" }}
                >
                  Address
                </div>
              </div>
              {deliveryBoy.map((elem) => {
                const { username, contact, address } = elem;
                return (
                  <>
                    <div
                      className="col-12 m-0 p-0 d-flex pt-1 pb-1"
                      style={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      }}
                    >
                      <div
                        className="col-1"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {serial_delivery++}
                      </div>
                      <div
                        className="col-3"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {username}
                      </div>
                      <div
                        className="col-3"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {contact}
                      </div>
                      <div
                        className="col-5"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                        }}
                      >
                        {address}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : null}

          {/* Update--------------------------------------------------------------------------------------------------------------------- */}
          {update ? (
            <div
              className="container-fluid"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              }}
            >
              <div className="col-12 d-flex outer_update_div">
                <div className="col-2"></div>
                <div className="col-3 update_div" onClick={UpdateWebInfo}>
                  <h5>Update Website Info</h5>
                </div>
                <div className="col-1"></div>
                <div className="col-3 update_div" onClick={AddRes}>
                  <h5>Add New Restaurent</h5>
                </div>
              </div>
              <div className="col-12 d-flex outer_update_div">
                <div className="col-2"></div>
                <div className="col-3 update_div" onClick={UpdateFoodItem}>
                  <h5>Update Food Items</h5>
                </div>
                <div className="col-1"></div>
                <div className="col-3 update_div" onClick={UpdateFoodCategori}>
                  <h5>Update Food Category</h5>
                </div>
              </div>
            </div>
          ) : null}

          {/* Update Web Info---------------------------------------------------------------------------------------------------------------- */}
          {update_web_details ? (
            <div className="container-fluid m-0 p-0 admin_default_page">
              <div
                className="mt-5 d-flex m-0 p-0 pt-5"
                style={{ height: "30%" }}
              >
                <div className="col-1 m-0 p-0"></div>
                <div className="col-3 m-0 p-0 mt-5">
                  <button
                    className="btn-xl btn-success pt-2 pb-2"
                    style={{ borderRadius: "10px" }}
                    onClick={UpdateWebInfo_Phone}
                  >
                    Update Phone No.
                  </button>
                </div>
                <div className="col-3 m-0 p-0 mt-5">
                  <button
                    className="btn-xl btn-success pt-2 pb-2"
                    style={{ borderRadius: "10px" }}
                    onClick={UpdateWebInfo_Mail}
                  >
                    Update Email Id
                  </button>
                </div>
                <div className="col-3 m-0 p-0 mt-5">
                  <button
                    className="btn-xl btn-success pt-2 pb-2"
                    style={{ borderRadius: "10px" }}
                    onClick={UpdateWebInfo_Name}
                  >
                    Update Company Name
                  </button>
                </div>
              </div>
              {!update_web_details_phone &&
              !update_web_details_mail &&
              !update_web_details_name ? (
                <div className="mt-5">
                  <h1>Change Website Details</h1>
                </div>
              ) : null}
              {update_web_details_phone ? (
                <div
                  className="pt-5 pb-5 m-auto pl-5 pr-5"
                  style={{
                    width: "40%",
                    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                    border: "2px solid black",
                    borderRadius: "50px",
                  }}
                >
                  <h4 className="pb-2">Enter New Phone Number</h4>
                  <input
                    type="text"
                    placeholder="Enter Phone Number..."
                    className="mt-2 form-control"
                    onChange={(e) => {
                      setnewcompanyPhone(e.target.value);
                    }}
                  ></input>
                  <div className="mt-4 mr-0">
                    <button
                      className="btn btn-success"
                      onClick={handleSubmitPhone}
                    >
                      Sumbit
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {update_web_details_mail ? (
                <div
                  className="pt-5 pb-5 m-auto pl-5 pr-5"
                  style={{
                    width: "40%",
                    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                    border: "2px solid black",
                    borderRadius: "50px",
                  }}
                >
                  <h4 className="pb-2">Enter New Email Id</h4>
                  <input
                    type="email"
                    placeholder="Enter Email Id..."
                    className="mt-2 form-control"
                    onChange={(e) => {
                      setnewcompanyEmail(e.target.value);
                    }}
                  ></input>
                  <div className="mt-4 mr-0">
                    <button
                      className="btn btn-success"
                      onClick={handleSubmitEmail}
                    >
                      Sumbit
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {update_web_details_name ? (
                <div
                  className="pt-5 pb-5 m-auto pl-5 pr-5"
                  style={{
                    width: "40%",
                    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                    border: "2px solid black",
                    borderRadius: "50px",
                  }}
                >
                  <h4 className="pb-2">Enter New Name</h4>
                  <input
                    type="text"
                    placeholder="Enter Name..."
                    className="mt-2 form-control"
                    onChange={(e) => {
                      setnewcompanyName(e.target.value);
                    }}
                  ></input>
                  <div className="mt-4 mr-0">
                    <button
                      className="btn btn-success"
                      onClick={handleSubmitName}
                    >
                      Sumbit
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : null}

          {/* Update restaurent list----------------------------------------------------------------------------------------------------- */}
          {add_res ? (
            <div
              className="container-fluid"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              }}
            >
              <div className="mt-4">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#add_new"
                >
                  Add New Restaurent
                </button>
              </div>
              <div
                className="mt-4 pl-3 pr-3"
                style={{ overflow: "auto", height: "83vh" }}
              >
                <div className="col-12 m-0 p-0 d-flex">
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Serial no
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Restaurent Name
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Update Name
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Restaurent Image
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Update Image
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Id
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Address
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Delete
                  </div>
                </div>
                {data.map((elem) => {
                  const { id, name, img, address } = elem;
                  return (
                    <>
                      <Update_Res
                        serial={serial_res++}
                        id={elem.id}
                        name={elem.name}
                        img={elem.img}
                        address={elem.address}
                      />
                    </>
                  );
                })}

                {/* Add New Restaurent Modal------------------------------------------------------------------------------------------------- */}
                <div
                  className="modal fade"
                  id="add_new"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add New Restaurent Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Enter Restaurent Name:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input
                              type="text"
                              placeholder="Enter Restaurent Name..."
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Enter Restaurent Address:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input
                              type="text"
                              placeholder="Enter Restaurent Address..."
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Enter Restaurent Id:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input
                              type="text"
                              placeholder="Enter Restaurent Id..."
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Upload Restaurent Image:</b>
                          </div>
                          <div className="col-7 m-0 p-0">
                            <input type="file"></input>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Update food category---------------------------------------------------------------------------------------------------- */}
          {update_food_category ? (
            <div className="container-fluid m-0 p-0">
              <div className="mt-4">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#add_new_cat"
                >
                  Add New Food Category
                </button>
              </div>
              <div
                className="mt-4 pl-3 pr-3"
                style={{ overflow: "auto", height: "83vh" }}
              >
                <div className="col-12 m-0 p-0 d-flex">
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Serial no
                  </div>
                  <div
                    className="head col-3 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Category Name
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Change Name
                  </div>
                  <div
                    className="head col-3 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Category Image
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Update Image
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Delete
                  </div>
                </div>
                {data.map((elem) => {
                  const { name, img } = elem;
                  return (
                    <>
                      <Update_Category
                        serial={serial_food_category++}
                        name={elem.name}
                        img={elem.img}
                      />
                    </>
                  );
                })}
                <div
                  className="modal fade"
                  id="add_new_cat"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add New Food Category Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Enter New Category Name:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input
                              type="text"
                              placeholder="Enter Restaurent Name..."
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Upload Restaurent Image:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input type="file"></input>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Update food item----------------------------------------------------------------------------------------------------------- */}
          {update_food_item ? (
            <div className="container-fluid m-0 p-0">
              <div className="mt-4">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#add_new_cat"
                >
                  Add New Food
                </button>
              </div>
              <div
                className="mt-4 pl-3 pr-3"
                style={{ overflow: "auto", height: "83vh" }}
              >
                <div className="col-12 m-0 p-0 d-flex">
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Serial no
                  </div>
                  <div
                    className="head col-2 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Food Name
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Change Name
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Food Image
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Update Image
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Category
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Price
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Quantity
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Update Price
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Restaurent Name
                  </div>
                  <div
                    className="head col-1 pt-2 pb-2"
                    style={{ border: "1px solid black" }}
                  >
                    Delete
                  </div>
                </div>
                {data.map((elem) => {
                  const { name, img, res, categori, qty } = elem;
                  return (
                    <>
                      <Update_Food
                        serial={serial_food_item++}
                        name={elem.name}
                        img={elem.img}
                        categori={elem.categori}
                        price={elem.price}
                        res={elem.res}
                        qty={elem.qty}
                      />
                    </>
                  );
                })}
                <div
                  className="modal fade"
                  id="add_new_cat"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add New Item Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Enter Item Name:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input
                              type="text"
                              placeholder="Enter Restaurent Name..."
                            ></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Upload Item Image:</b>
                          </div>
                          <div className="col-6 m-0 p-0">
                            <input type="file"></input>
                          </div>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Select Item Category:</b>
                          </div>
                          <select className="form-select ml-3">
                            {Category_array.map((option) => (
                              <option value={option.value}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="d-flex mt-3 p-0">
                          <div className="col-5 m-0 p-0">
                            <b>Select Restaurent Name:</b>
                          </div>
                          <select className="form-select ml-3">
                            {Restaurent_list_array.map((option) => (
                              <option value={option.value}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-dismiss="modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/*-------------Loader---- */}
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

export default Admin_control_panel;
