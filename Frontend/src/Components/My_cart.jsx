// import React, { useState } from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import { FaBagShopping } from "react-icons/fa6";
// import NavLink from "react-bootstrap/esm/NavLink";
// import Cart_table from "./Cart_table";

// const My_cart = ({ serial, name, time, food = [], qty = [], res = [], price = [] }) => {

//     // Calculate the total sum of prices
//     const sum = Array.isArray(price) ? price.reduce((acc, curr) => acc + curr, 0) : 0;

//     const [modal, setModal] = useState(false);

//     const handleOrderNow = () => {
//         setModal(true);
//     }

//     const closeModal = () => {
//         setModal(false);
//     }

//     return (
//         <>
//             {/* Navbar */}
//             <div className='row'>
//                 <Navbar expand="lg" className="bg-body-tertiary header col-12" style={{ display: 'flex' }}>
//                     <div className='col-lg-10 col-md-9 col-sm-9 col-8 m-0 p-0 logo m-0 p-0' style={{ display: 'flex' }}>
//                         <div className='col-lg-2 col-md-2 col-sm-1 col-xs-8'>
//                             <h4><i className="fa-solid fa-burger" style={{ paddingTop: '10px' }}></i></h4>
//                         </div>
//                         <div className='col-lg-3 col-md-6 col-sm-5 col-xs-5' style={{ paddingTop: '0.5%', fontFamily: 'brittany' }}>
//                             <h4>BON&nbsp;&nbsp;APETITE</h4>
//                         </div>
//                         <div className='col-lg-7 col-md-4'></div>
//                     </div>
//                     <div className='col-lg-2 col-md-3 col-sm-3 col-4 m-0 p-0' style={{ float: 'left' }}>
//                         <NavLink to href={'/My_order'} style={{ paddingTop: '0px' }}><FaBagShopping className='header_menu' style={{ height: '22px', width: '22px' }} /><span className='header_menu'>&nbsp;&nbsp;My&nbsp;Orders</span></NavLink>
//                     </div>
//                 </Navbar>
//             </div>

//             {/* Cart Section */}
//             <div className="my_cart_background m-0 p-0">
//                 <div className="row" style={{ padding: '40px 20px 20px 20px' }}>
//                     <div className="col-7" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
//                         <table className="col-12">
//                             <tbody>
//                                 <tr className="col-12 cart_table">
//                                     <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Serial No {serial}</th>
//                                     <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Image</th>
//                                     <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Item Name{name}</th>
//                                     <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Restaurant Name{res}</th>
//                                     <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Quantity{qty}</th>
//                                     <th className="col-1 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Price{price}</th>
//                                     <th className="col-2 pt-2 pb-2" style={{ paddingLeft: '30px', paddingRight: '30px', borderStyle: 'solid', borderColor: 'black' }}>Time{time}</th>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <Cart_table />
//                     </div>
//                 </div>

//                 <div className="col-9"></div>
//                 <div className="col-11">
//                     <button className="btn btn-success pl-5 pr-5 pt-2 pb-2" style={{ marginLeft: '15px', marginTop: "2px", marginRight: "4rem" }}><h5>Total Order</h5></button>
//                     <button className="btn btn-success pl-5 pr-5 pt-2 pb-2 ml-5" style={{ marginLeft: '50px' }} onClick={handleOrderNow} data-toggle="modal" data-target="#orderModal"><h5>Order Now</h5></button>
//                 </div>
//             </div>

//             {/* Modal */}
//             {modal && (
//                 <div className={`modal fade show`} id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!modal} style={{ display: modal ? 'block' : 'none' }}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">Order Info</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body d-flex">
//                                 <div className="col-5">
//                                     <div><b>Food Item</b></div><br />
//                                     {food.map((item, index) => (
//                                         <div key={index}>
//                                             {item}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="col-2">
//                                 <div className=""><b>Quantity</b></div><br></br>
//                                 {qty.map(qty => (
//                                     <div>
//                                         {qty}
//                                     </div>
//                                 ))}
//                                  </div>
//                                 <div className="col-3">
//                                     <div><b>Restaurant</b></div><br />
//                                     {res.map((restaurant, index) => (
//                                         <div key={index}>
//                                             {restaurant}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="col-2">
//                                     <div><b>Price</b></div><br />
//                                     {price.map((amount, index) => (
//                                         <div key={index}>
//                                             {amount}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div><h6>Total Price: {sum}</h6></div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={closeModal}>Ok</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default My_cart;

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaBagShopping } from "react-icons/fa6";
import NavLink from "react-bootstrap/esm/NavLink";
import Cart_table from "./Cart_table";

const My_cart = ({
  serial,
  name,
  time,
  food = [],
  qty = [],
  res = [],
  price = [],
}) => {
  // Calculate the total sum of prices
  const sum = Array.isArray(price)
    ? price.reduce((acc, curr) => acc + curr, 0)
    : 0;

  const [modal, setModal] = useState(false);
  const [totalOrderModal, setTotalOrderModal] = useState(false); // State for Total Order Modal

  const handleOrderNow = () => {
    setModal(true);
  };

  const handleTotalOrder = () => {
    setTotalOrderModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeTotalOrderModal = () => {
    setTotalOrderModal(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="row">
        <Navbar
          expand="lg"
          className="bg-body-tertiary header col-12"
          style={{ display: "flex" }}
        >
          <div
            className="col-lg-10 col-md-9 col-sm-9 col-8 m-0 p-0 logo m-0 p-0"
            style={{ display: "flex" }}
          >
            <div className="col-lg-2 col-md-2 col-sm-1 col-xs-8">
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
          <div
            className="col-lg-2 col-md-3 col-sm-3 col-4 m-0 p-0"
            style={{ float: "left" }}
          >
            <NavLink to href={"/My_order"} style={{ paddingTop: "0px" }}>
              <FaBagShopping
                className="header_menu"
                style={{ height: "22px", width: "22px" }}
              />
              <span className="header_menu">&nbsp;&nbsp;My&nbsp;Orders</span>
            </NavLink>
          </div>
        </Navbar>
      </div>

      {/* Cart Section */}
      <div className="my_cart_background m-0 p-0">
        <div className="row" style={{ padding: "40px 20px 20px 20px" }}>
          <div
            className="col-7"
            style={{ paddingBottom: "20px", paddingTop: "20px" }}
          >
            <table className="col-12">
              <tbody>
                <tr className="col-12 cart_table">
                  <th
                    className="col-1 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Serial No {serial}
                  </th>
                  <th
                    className="col-2 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Image
                  </th>
                  <th
                    className="col-2 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Item Name{name}
                  </th>
                  <th
                    className="col-2 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Restaurant Name{res}
                  </th>
                  <th
                    className="col-2 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Quantity{qty}
                  </th>
                  <th
                    className="col-1 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Price{price}
                  </th>
                  <th
                    className="col-2 pt-2 pb-2"
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderStyle: "solid",
                      borderColor: "black",
                    }}
                  >
                    Time{time}
                  </th>
                </tr>
              </tbody>
            </table>
            <Cart_table />
          </div>
        </div>

        <div className="col-9"></div>
        <div className="col-11">
          <button
            className="btn btn-success pl-5 pr-5 pt-2 pb-2"
            style={{
              marginLeft: "15px",
              marginTop: "2px",
              marginRight: "4rem",
            }}
            onClick={handleTotalOrder}
          >
            <h5>Total Order</h5>
          </button>
          <button
            className="btn btn-success pl-5 pr-5 pt-2 pb-2 ml-5"
            style={{ marginLeft: "50px" }}
            onClick={handleOrderNow}
            data-toggle="modal"
            data-target="#orderModal"
          >
            <h5>Order Now</h5>
          </button>
        </div>
      </div>

      {/* Order Now Modal */}
      {modal && (
        <div
          className={`modal fade show`}
          id="orderModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!modal}
          style={{ display: modal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Order Info
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex">
                <div className="col-5">
                  <div>
                    <b>Food Item</b>
                  </div>
                  <br />
                  {food.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <div className="col-2">
                  <div>
                    <b>Quantity</b>
                  </div>
                  <br />
                  {qty.map((quantity, index) => (
                    <div key={index}>{quantity}</div>
                  ))}
                </div>
                <div className="col-3">
                  <div>
                    <b>Restaurant</b>
                  </div>
                  <br />
                  {res.map((restaurant, index) => (
                    <div key={index}>{restaurant}</div>
                  ))}
                </div>
                <div className="col-2">
                  <div>
                    <b>Price</b>
                  </div>
                  <br />
                  {price.map((amount, index) => (
                    <div key={index}>{amount}</div>
                  ))}
                </div>
              </div>
              <div>
                <h6>Total Price: {sum}</h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={closeModal}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Total Order Modal */}
      {totalOrderModal && (
        <div
          className={`modal fade show`}
          id="totalOrderModal"
          tabindex="-1"
          aria-labelledby="totalOrderModalLabel"
          aria-hidden={!totalOrderModal}
          style={{ display: totalOrderModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="totalOrderModalLabel">
                  Total Order Info
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeTotalOrderModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6>Total Price: {sum}</h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={closeTotalOrderModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default My_cart;
