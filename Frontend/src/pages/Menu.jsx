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
import { LuUtensilsCrossed } from "react-icons/lu";
import { CgLogIn } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsEmojiFrown } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import {
  fetchCompanyDetails,
  fetchAllFoods,
  logout,
  findUser,
  fetchAllCategory,
} from "../utils/utils";

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
        setoops(true);
      }
    });
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

  const [companyName, setcompanyName] = useState(null);
  const [companyEmail, setcompanyEmail] = useState(null);
  const [companyPhone, setcompanyPhone] = useState(null);
  const [companyFB, setcompanyFB] = useState(null);
  const [companyInsta, setcompanyInsta] = useState(null);

  const [allFood, setallFood] = useState([]);
  const [allCategory, setallCategory] = useState([]);

  const [loader, setloader] = useState(true);

  useEffect(() => {
    // Find user
    findUser().then((user) => {
      if (user.username) {
        setAccount(user.username.split(" ")[0]);
        setloader(false);
      } else {
        setAccount("My Account");
        setloader(false);
      }
    });

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

    fetchAllCategory().then((response) => {
      setallCategory(response);
      setIsCategoryLoaded(true);
    });
  }, []);

  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);

  const [text] = useTypewriter({
    words:
      isCategoryLoaded && Array.isArray(allCategory)
        ? allCategory.map((category) => category.name)
        : [""],
    loop: {},
  });

  const AllFood = () => {
    setData(allFood);
    setc(false);
  };

  const [oops, setoops] = useState(false);

  if (oops) {
    return (
      <>
        <div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              paddingTop: "3rem",
              paddingRight: "5rem",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            <LuUtensilsCrossed
              onClick={() => {
                setoops(false);
              }}
            />
          </div>
          <div style={{ paddingTop: "8rem" }}>
            <img src="/Image/oops.jpg"></img>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <h4>You Need to first Login!</h4>
          </div>
        </div>
      </>
    );
  }

  if (allFood.length === 0 || loader || companyName === null) {
    return (
      <div className="Menu_main">
        <svg
          width="168"
          height="158"
          viewBox="0 0 168 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="pizza">
            <rect width="168" height="158" fill="none"></rect>
            <g id="slice6">
              <g id="slice">
                <mask id="path-1-inside-1_7_2" fill="white">
                  <path d="M110 34.8997C118.513 39.4198 125.582 45.921 130.497 53.75C135.412 61.579 138 70.4598 138 79.5L82 79.5L110 34.8997Z"></path>
                </mask>
                <path
                  d="M110 34.8997C118.513 39.4198 125.582 45.921 130.497 53.75C135.412 61.579 138 70.4598 138 79.5L82 79.5L110 34.8997Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-1-inside-1_7_2)"
                ></path>
              </g>
              <g id="pepperoni">
                <circle cx="114" cy="63" r="6" fill="#F12424"></circle>
                <circle cx="114" cy="63" r="6" fill="#F12424"></circle>
              </g>
              <g id="mushroom">
                <path
                  d="M96.3127 75.3748C93.8388 74.3499 93.5395 72.1249 96.4349 66.9246C100.861 64.107 105.48 66.5248 103.603 67.4062C101.726 68.2876 101.517 69.215 101.78 69.3984C101.78 69.3984 105.126 71.2856 104.991 72.8193C104.856 74.353 103.753 74.1725 103.409 74.5483C103.066 74.9242 99.9579 71.3905 99.9579 71.3905C96.0194 74.1256 98.7867 76.3997 96.3127 75.3748Z"
                  fill="#E3DDDD"
                ></path>
                <path
                  d="M99.9579 71.3905C96.0194 74.1256 98.7867 76.3997 96.3127 75.3748C93.8388 74.3499 93.5395 72.1249 96.4349 66.9246C100.861 64.107 105.48 66.5248 103.603 67.4062C101.726 68.2876 101.517 69.215 101.78 69.3984M99.9579 71.3905C99.9579 71.3905 103.066 74.9242 103.409 74.5483C103.753 74.1725 104.856 74.353 104.991 72.8193C105.126 71.2856 101.78 69.3984 101.78 69.3984M99.9579 71.3905L101.78 69.3984"
                  stroke="black"
                ></path>
              </g>
              <path
                id="onion"
                d="M129.841 65.2587C127.54 64.2211 127.021 63.5697 127.016 62.3249C127.666 61.9214 128.094 61.8629 129.071 62.3249C130.14 62.8474 130.783 63.5952 131.961 65.2587C131.313 66.9451 130.895 67.8704 129.392 69.2403C131.161 70.4193 131.537 72.3751 131.961 72.3837C132.384 72.3923 129.231 76.9243 129.071 77.9719C127.662 78.0881 127.229 77.8597 127.016 76.994C126.863 74.9998 127.829 74.044 129.841 72.3837C128.109 71.4403 127.329 70.8249 127.016 69.2403C126.968 67.7728 127.329 66.9206 129.841 65.2587Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
              <path
                id="pepper"
                d="M121.34 55.4341C123.716 54.3509 124.645 54.4077 125.824 55.2995C125.811 56.107 125.607 56.4894 124.578 56.9337C123.436 57.4079 122.34 57.3806 120.055 57.1194C118.855 55.39 118.235 54.3915 117.853 52.2096C115.667 52.7671 113.592 51.6583 113.327 51.9889C113.062 52.3195 110.695 46.5489 109.803 45.6669C110.547 44.4628 111.025 44.2833 111.972 44.7368C113.948 46.0515 114.265 47.5081 114.612 50.3036C116.554 49.6053 117.608 49.4283 119.294 50.32C120.708 51.3389 121.295 52.2392 121.34 55.4341Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
            </g>
            <g id="slice5">
              <g id="slice_2">
                <mask id="path-7-inside-2_7_2" fill="white">
                  <path d="M54 34.8997C62.5131 30.3796 72.1699 28 82 28C91.8301 28 101.487 30.3796 110 34.8997L82 79.5L54 34.8997Z"></path>
                </mask>
                <path
                  d="M54 34.8997C62.5131 30.3796 72.1699 28 82 28C91.8301 28 101.487 30.3796 110 34.8997L82 79.5L54 34.8997Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-7-inside-2_7_2)"
                ></path>
              </g>
              <g id="pepperoni_2">
                <circle cx="82" cy="56" r="6" fill="#F12424"></circle>
                <circle cx="82" cy="56" r="6" fill="#F12424"></circle>
              </g>
              <g id="mushroom_2">
                <path
                  d="M91.3127 43.3748C88.8388 42.3499 88.5395 40.1249 91.4349 34.9246C95.8614 32.107 100.48 34.5248 98.603 35.4062C96.7261 36.2876 96.5167 37.215 96.7805 37.3984C96.7805 37.3984 100.126 39.2856 99.9914 40.8193C99.8563 42.353 98.7534 42.1725 98.4095 42.5483C98.0656 42.9242 94.9579 39.3905 94.9579 39.3905C91.0194 42.1256 93.7867 44.3997 91.3127 43.3748Z"
                  fill="#E3DDDD"
                ></path>
                <path
                  d="M94.9579 39.3905C91.0194 42.1256 93.7867 44.3997 91.3127 43.3748C88.8388 42.3499 88.5395 40.1249 91.4349 34.9246C95.8614 32.107 100.48 34.5248 98.603 35.4062C96.7261 36.2876 96.5167 37.215 96.7805 37.3984M94.9579 39.3905C94.9579 39.3905 98.0656 42.9242 98.4095 42.5483C98.7534 42.1725 99.8563 42.353 99.9914 40.8193C100.126 39.2856 96.7805 37.3984 96.7805 37.3984M94.9579 39.3905L96.7805 37.3984"
                  stroke="black"
                ></path>
              </g>
              <path
                id="pepper_2"
                d="M92.1727 48.6661C93.9594 46.7623 94.8409 46.462 96.27 46.8398C96.5642 47.5919 96.5204 48.0231 95.7373 48.8247C94.8608 49.6968 93.8366 50.0874 91.6233 50.713C89.857 49.5684 88.9042 48.8801 87.7226 47.0063C85.9121 48.3518 83.5712 48.1136 83.4516 48.52C83.3319 48.9264 78.9513 44.4862 77.7915 44.0087C78.0235 42.6121 78.3975 42.2646 79.4458 42.3247C81.7725 42.7912 82.6182 44.0187 84.0009 46.473C85.5319 45.0901 86.4399 44.5264 88.3386 44.7112C90.034 45.1171 90.918 45.7276 92.1727 48.6661Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
              <path
                id="onion_2"
                d="M70.8415 37.2587C68.5397 36.2211 68.0212 35.5697 68.0156 34.3249C68.6658 33.9214 69.0936 33.8629 70.0708 34.3249C71.1402 34.8474 71.783 35.5952 72.9609 37.2587C72.3132 38.9451 71.8954 39.8704 70.3919 41.2403C72.1607 42.4193 72.5374 44.3751 72.9609 44.3837C73.3844 44.3923 70.2313 48.9243 70.0708 49.9719C68.6618 50.0881 68.2293 49.8597 68.0156 48.994C67.8631 46.9998 68.8294 46.044 70.8415 44.3837C69.109 43.4403 68.3292 42.8249 68.0156 41.2403C67.9682 39.7728 68.3287 38.9206 70.8415 37.2587Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
            </g>
            <g id="slice1">
              <g id="slice_3">
                <mask id="path-13-inside-3_7_2" fill="white">
                  <path d="M138 79.5C138 88.5401 135.412 97.421 130.497 105.25C125.582 113.079 118.513 119.58 110 124.1L82 79.5H138Z"></path>
                </mask>
                <path
                  d="M138 79.5C138 88.5401 135.412 97.421 130.497 105.25C125.582 113.079 118.513 119.58 110 124.1L82 79.5H138Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-13-inside-3_7_2)"
                ></path>
              </g>
              <g id="pepperoni_3">
                <circle cx="119" cy="99" r="6" fill="#F12424"></circle>
                <circle cx="119" cy="99" r="6" fill="#F12424"></circle>
              </g>
              <path
                id="pepper_3"
                d="M110.227 89.6851C111.587 87.456 112.388 86.9817 113.864 87.0589C114.306 87.7349 114.352 88.166 113.749 89.1109C113.07 90.1438 112.147 90.7358 110.109 91.8011C108.145 91.0423 107.072 90.5634 105.532 88.9712C104.035 90.6587 101.695 90.9046 101.661 91.3269C101.627 91.7492 96.4305 88.2994 95.1975 88.0694C95.1387 86.6549 95.4337 86.2382 96.4722 86.0825C98.8451 86.063 99.9241 87.0914 101.78 89.2108C102.995 87.5439 103.769 86.8063 105.665 86.5986C107.408 86.6489 108.398 87.0656 110.227 89.6851Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
              <path
                id="onion_3"
                d="M108.882 106.032C106.425 106.612 105.617 106.411 104.854 105.427C105.124 104.711 105.427 104.404 106.484 104.175C107.65 103.938 108.615 104.139 110.563 104.741C111.077 106.473 111.309 107.461 110.951 109.463C113.072 109.321 114.563 110.642 114.904 110.391C115.245 110.14 115.505 115.655 116.016 116.583C114.97 117.534 114.488 117.616 113.791 117.06C112.455 115.571 112.639 114.225 113.223 111.682C111.274 111.99 110.281 111.977 109.067 110.911C108.135 109.776 107.902 108.881 108.882 106.032Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
            </g>
            <g id="slice2">
              <g id="slice_4">
                <mask id="path-17-inside-4_7_2" fill="white">
                  <path d="M110 124.1C101.487 128.62 91.8301 131 82 131C72.1699 131 62.5131 128.62 54 124.1L82 79.5L110 124.1Z"></path>
                </mask>
                <path
                  d="M110 124.1C101.487 128.62 91.8301 131 82 131C72.1699 131 62.5131 128.62 54 124.1L82 79.5L110 124.1Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-17-inside-4_7_2)"
                ></path>
              </g>
              <g id="pepperoni_4">
                <circle cx="78" cy="103" r="6" fill="#F12424"></circle>
                <circle cx="78" cy="103" r="6" fill="#F12424"></circle>
              </g>
              <g id="mushroom_3">
                <path
                  d="M86.3127 117.375C83.8388 116.35 83.5395 114.125 86.4349 108.925C90.8614 106.107 95.48 108.525 93.603 109.406C91.7261 110.288 91.5167 111.215 91.7805 111.398C91.7805 111.398 95.1264 113.286 94.9914 114.819C94.8563 116.353 93.7534 116.172 93.4095 116.548C93.0656 116.924 89.9579 113.391 89.9579 113.391C86.0194 116.126 88.7867 118.4 86.3127 117.375Z"
                  fill="#E3DDDD"
                ></path>
                <path
                  d="M89.9579 113.391C86.0194 116.126 88.7867 118.4 86.3127 117.375C83.8388 116.35 83.5395 114.125 86.4349 108.925C90.8614 106.107 95.48 108.525 93.603 109.406C91.7261 110.288 91.5167 111.215 91.7805 111.398M89.9579 113.391C89.9579 113.391 93.0656 116.924 93.4095 116.548C93.7534 116.172 94.8563 116.353 94.9914 114.819C95.1264 113.286 91.7805 111.398 91.7805 111.398M89.9579 113.391L91.7805 111.398"
                  stroke="black"
                ></path>
              </g>
              <path
                id="pepper_4"
                d="M78.1727 124.666C79.9594 122.762 80.8409 122.462 82.27 122.84C82.5642 123.592 82.5204 124.023 81.7373 124.825C80.8608 125.697 79.8366 126.087 77.6233 126.713C75.857 125.568 74.9042 124.88 73.7226 123.006C71.9121 124.352 69.5712 124.114 69.4516 124.52C69.3319 124.926 64.9513 120.486 63.7915 120.009C64.0235 118.612 64.3975 118.265 65.4458 118.325C67.7725 118.791 68.6182 120.019 70.0009 122.473C71.5319 121.09 72.4399 120.526 74.3386 120.711C76.034 121.117 76.918 121.728 78.1727 124.666Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
              <path
                id="onion_4"
                d="M84.2386 90.8992C81.7811 91.4786 80.9731 91.2779 80.2103 90.2943C80.4801 89.5782 80.7837 89.2712 81.8401 89.0422C83.0065 88.805 83.9717 89.0064 85.9193 89.608C86.4331 91.3399 86.6654 92.3282 86.3078 94.3305C88.4286 94.1878 89.9189 95.5092 90.26 95.258C90.6011 95.0069 90.8618 100.522 91.3727 101.45C90.3261 102.401 89.844 102.483 89.1471 101.927C87.8112 100.438 87.9952 99.0916 88.5793 96.5492C86.6308 96.8566 85.6375 96.8437 84.4234 95.7782C83.4917 94.6433 83.2584 93.7479 84.2386 90.8992Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
            </g>
            <g id="slice4">
              <g id="slice_5">
                <mask id="path-23-inside-5_7_2" fill="white">
                  <path d="M26 79.5C26 70.4599 28.5876 61.579 33.5026 53.75C38.4176 45.921 45.4869 39.4198 54 34.8997L82 79.5L26 79.5Z"></path>
                </mask>
                <path
                  d="M26 79.5C26 70.4599 28.5876 61.579 33.5026 53.75C38.4176 45.921 45.4869 39.4198 54 34.8997L82 79.5L26 79.5Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-23-inside-5_7_2)"
                ></path>
              </g>
              <g id="pepperoni_5">
                <circle cx="64" cy="70" r="6" fill="#F12424"></circle>
                <circle cx="64" cy="70" r="6" fill="#F12424"></circle>
              </g>
              <g id="mushroom_4">
                <path
                  d="M43.3127 61.3748C40.8388 60.3499 40.5395 58.1249 43.4349 52.9246C47.8614 50.107 52.48 52.5248 50.603 53.4062C48.7261 54.2876 48.5167 55.215 48.7805 55.3984C48.7805 55.3984 52.1264 57.2856 51.9914 58.8193C51.8563 60.353 50.7534 60.1725 50.4095 60.5483C50.0656 60.9242 46.9579 57.3905 46.9579 57.3905C43.0194 60.1256 45.7867 62.3997 43.3127 61.3748Z"
                  fill="#E3DDDD"
                ></path>
                <path
                  d="M46.9579 57.3905C43.0194 60.1256 45.7867 62.3997 43.3127 61.3748C40.8388 60.3499 40.5395 58.1249 43.4349 52.9246C47.8614 50.107 52.48 52.5248 50.603 53.4062C48.7261 54.2876 48.5167 55.215 48.7805 55.3984M46.9579 57.3905C46.9579 57.3905 50.0656 60.9242 50.4095 60.5483C50.7534 60.1725 51.8563 60.353 51.9914 58.8193C52.1264 57.2856 48.7805 55.3984 48.7805 55.3984M46.9579 57.3905L48.7805 55.3984"
                  stroke="black"
                ></path>
              </g>
              <path
                id="pepper_5"
                d="M57.8415 50.8697C55.5397 49.6375 55.0212 48.864 55.0156 47.3859C55.6658 46.9067 56.0936 46.8372 57.0708 47.3859C58.1402 48.0063 58.783 48.8943 59.9609 50.8697C59.3132 52.8724 58.8954 53.9711 57.3919 55.5979C59.1607 56.9979 59.5374 59.3204 59.9609 59.3306C60.3844 59.3409 57.2313 64.7227 57.0708 65.9666C55.6618 66.1046 55.2293 65.8334 55.0156 64.8053C54.8631 62.4372 55.8294 61.3022 57.8415 59.3306C56.109 58.2104 55.3292 57.4796 55.0156 55.5979C54.9682 53.8552 55.3287 52.8432 57.8415 50.8697Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
              <path
                id="onion_5"
                d="M34.5084 66.9457C32.7549 68.7623 31.9667 69.0306 30.7931 68.6159C30.6326 67.8677 30.7219 67.4452 31.4866 66.6812C32.3393 65.8508 33.2601 65.4981 35.2235 64.9506C36.5925 66.1293 37.3225 66.8349 38.1047 68.7124C39.8113 67.4452 41.7796 67.7506 41.9306 67.3548C42.0816 66.959 45.2839 71.4564 46.2158 71.9611C45.8497 73.3266 45.4888 73.6567 44.6017 73.5657C42.673 73.0364 42.0994 71.8042 41.2154 69.3499C39.7428 70.6625 38.9003 71.1888 37.3029 70.9494C35.9054 70.4988 35.2248 69.8719 34.5084 66.9457Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
            </g>
            <g id="slice3">
              <g id="slice_6">
                <mask id="path-29-inside-6_7_2" fill="white">
                  <path d="M54 124.1C45.4869 119.58 38.4176 113.079 33.5026 105.25C28.5876 97.421 26 88.5401 26 79.5L82 79.5L54 124.1Z"></path>
                </mask>
                <path
                  d="M54 124.1C45.4869 119.58 38.4176 113.079 33.5026 105.25C28.5876 97.421 26 88.5401 26 79.5L82 79.5L54 124.1Z"
                  fill="#FDDBA9"
                  stroke="#EE9758"
                  strokeWidth="2"
                  mask="url(#path-29-inside-6_7_2)"
                ></path>
              </g>
              <g id="pepperoni_6">
                <circle cx="42" cy="99" r="6" fill="#F12424"></circle>
                <circle cx="42" cy="99" r="6" fill="#F12424"></circle>
              </g>
              <g id="mushroom_5">
                <path
                  d="M57.3127 93.3748C54.8388 92.3499 54.5395 90.1249 57.4349 84.9246C61.8614 82.107 66.48 84.5248 64.603 85.4062C62.7261 86.2876 62.5167 87.215 62.7805 87.3984C62.7805 87.3984 66.1264 89.2856 65.9914 90.8193C65.8563 92.353 64.7534 92.1725 64.4095 92.5483C64.0656 92.9242 60.9579 89.3905 60.9579 89.3905C57.0194 92.1256 59.7867 94.3997 57.3127 93.3748Z"
                  fill="#E3DDDD"
                ></path>
                <path
                  d="M60.9579 89.3905C57.0194 92.1256 59.7867 94.3997 57.3127 93.3748C54.8388 92.3499 54.5395 90.1249 57.4349 84.9246C61.8614 82.107 66.48 84.5248 64.603 85.4062C62.7261 86.2876 62.5167 87.215 62.7805 87.3984M60.9579 89.3905C60.9579 89.3905 64.0656 92.9242 64.4095 92.5483C64.7534 92.1725 65.8563 92.353 65.9914 90.8193C66.1264 89.2856 62.7805 87.3984 62.7805 87.3984M60.9579 89.3905L62.7805 87.3984"
                  stroke="black"
                ></path>
              </g>
              <path
                id="pepper_6"
                d="M45.1727 88.6661C46.9594 86.7623 47.8409 86.462 49.27 86.8398C49.5642 87.5919 49.5204 88.0231 48.7373 88.8247C47.8608 89.6968 46.8366 90.0874 44.6233 90.713C42.857 89.5684 41.9042 88.8801 40.7226 87.0063C38.9121 88.3518 36.5712 88.1136 36.4516 88.52C36.3319 88.9264 31.9513 84.4862 30.7915 84.0087C31.0235 82.6121 31.3975 82.2646 32.4458 82.3247C34.7725 82.7912 35.6182 84.0187 37.0009 86.473C38.5319 85.0901 39.4399 84.5264 41.3386 84.7112C43.034 85.1171 43.918 85.7276 45.1727 88.6661Z"
                fill="#1EAA07"
                stroke="#FDDBA9"
              ></path>
              <path
                id="onion_6"
                d="M53.4224 96.617C50.9625 96.0481 50.3269 95.5103 50.0787 94.2906C50.6377 93.7681 51.0459 93.6272 52.0944 93.8898C53.2452 94.1938 54.0214 94.8018 55.5011 96.2038C55.1947 97.9841 54.9652 98.9731 53.7578 100.61C55.7225 101.421 56.4733 103.266 56.8904 103.192C57.3074 103.118 55.0986 108.178 55.1454 109.236C53.7861 109.625 53.3173 109.486 52.9389 108.678C52.4005 106.752 53.1619 105.626 54.8116 103.605C52.9285 103.018 52.0437 102.566 51.4271 101.073C51.0944 99.6431 51.2818 98.737 53.4224 96.617Z"
                fill="#FFFBFB"
                stroke="black"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    );
  }

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
                    <FaCartArrowDown
                      className="header_menu"
                      style={{ height: "25px", width: "25px" }}
                    />
                    <span
                      className="header_menu"
                      style={{ fontSize: "15px" }}
                      onClick={() => {
                        if (account !== "My Account") {
                          navigate("/My_cart");
                        } else {
                          setoops(true);
                        }
                      }}
                    >
                      &nbsp;&nbsp;My&nbsp;Cart
                    </span>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 m-0 p-0 d-none d-sm-none d-md-block"
                    style={{ float: "left" }}
                  >
                    <FaBagShopping
                      className="header_menu"
                      style={{ height: "22px", width: "22px" }}
                    />
                    <span
                      className="header_menu"
                      style={{ fontSize: "15px" }}
                      onClick={() => {
                        if (account !== "My Account") {
                          navigate("/My_order");
                        } else {
                          setoops(true);
                        }
                      }}
                    >
                      &nbsp;&nbsp;My&nbsp;Orders
                    </span>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 m-0 p-0 d-sm-none  d-md-none d-none d-lg-block"
                    style={{ float: "left" }}
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
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-xs-2 m-0 p-0"
                    style={{ float: "left" }}
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
                    ) : (
                      <>
                        <NavLink to={"/Login"}>
                          <CgLogIn
                            className="header_menu"
                            style={{ height: "25px", width: "25px" }}
                          />
                          <span className="header_menu">
                            &nbsp;&nbsp;Log&nbsp;in
                          </span>
                        </NavLink>
                      </>
                    )}
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
                  src="/Image/allFood.jpeg"
                  alt="All food"
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

              {Array.isArray(allCategory) &&
                allCategory.map((elem) => {
                  const { image, name } = elem;
                  return (
                    <>
                      <div
                        className="mt-0 float-left pb-3"
                        style={{ height: "50%", width: "9%" }}
                      >
                        <img
                          src={`/categoryPictures/${image}`}
                          alt="categories"
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
                      const { _id, image, name, category, price, restaurent } =
                        elem;
                      return (
                        <>
                          <Card
                            id={_id}
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
