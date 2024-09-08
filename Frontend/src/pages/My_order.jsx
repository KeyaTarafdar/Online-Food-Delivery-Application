// My_order.jsx
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  fetchCompanyDetails,
  cancelSingleOrder,
  findUser,
} from "../utils/utils";

const My_order = () => {
  const [companyName, setcompanyName] = useState();

  const [loading, setLoading] = useState(true);

  const [orders, setorders] = useState([]);
  const [cancledOrders, setcancledOrders] = useState([]);
  const [delivereddOrders, setdelivereddOrders] = useState([]);

  const handleCancelOrder = (id) => {
    cancelSingleOrder(id).then((response) => {
      alert(response);
    });
  };

  useEffect(() => {
    // Fetch company details
    fetchCompanyDetails().then((company) => {
      setcompanyName(company.name.toUpperCase());
    });

    findUser().then((response) => {
      setorders(response.orders);
      setcancledOrders(response.cancledOrders);
      setdelivereddOrders(response.deliveredOrders);
      setLoading(false);
    });
  }, [handleCancelOrder]);

  let s1 = 1,
    s2 = 1,
    s3 = 1;
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* Navbar-------------------------------------------------------------------------------- */}
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
              <h4>{companyName}</h4>
            </div>
            <div className="col-lg-7 col-md-4"></div>
          </div>
        </Navbar>
      </div>

      {/* Main Content---------------------------------------------------------------------------- */}
      <div className="my_cart_background m-0 p-0">
        <div className="row" style={{ padding: "40px 20px 20px 20px" }}>
          <div
            className="col-11"
            style={{ paddingBottom: "20px", paddingTop: "20px" }}
          >
            <table className="col-11">
              <tr className="col-12 Order_table">
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Serial No
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Time
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Order Items
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Restaurant Name
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Quantity
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Price
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Address
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  OTP
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Contact our delivery agent
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Expected Delivery Time
                </th>
              </tr>
              {Array.isArray(orders)
                ? orders.map((elem) => (
                    <>
                      <tr className="col-12 pl-1 pr-1">
                        <td className="pl-1 pr-1">{s1++}</td>
                        <td className="pl-1 pr-1">{elem.time}</td>
                        <td className="pl-1 pr-1">
                          <table style={{ textAlign: "center" }}>
                            {[
                              ...new Set(elem.foodId.map((item) => item.name)),
                            ].map((name) => (
                              <tr>{name}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {[
                              ...new Set(
                                elem.foodId.map((item) => item.restaurent)
                              ),
                            ].map((restaurent) => (
                              <tr>{restaurent}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = (acc[item._id] || 0) + 1;
                                return acc;
                              }, {})
                            ).map(([id, count]) => (
                              <tr>{count}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = {
                                  count:
                                    (acc[item._id] ? acc[item._id].count : 0) +
                                    1,
                                  price: item.price,
                                };
                                return acc;
                              }, {})
                            ).map(([id, { count, price }]) => (
                              <tr>{count * price}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">{elem.orderAddress}</td>
                        <td className="pl-1 pr-1">{elem.OTP}</td>
                        <td className="pl-1 pr-1">
                          <table>
                            <tr>{elem.deliveryBoy.username}</tr>
                            <tr>{elem.deliveryBoy.contact}</tr>
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            <tr>{elem.expectedDeliveryTime}</tr>
                          </table>
                        </td>
                        <td className="col-2">
                          <button
                            className="btn-sm btn-warning mt-1"
                            data-toggle="modal"
                            data-target={`#exampleModal-${elem._id}`}
                          >
                            Cancel Order
                          </button>
                        </td>
                      </tr>
                      {/* Modal------------------------------------------------------------- */}
                      <div
                        class="modal fade"
                        id={`exampleModal-${elem._id}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-body">
                              Are you sure you want to cancel the order?{" "}
                              {[
                                ...new Set(
                                  elem.foodId.map((item) => item.name)
                                ),
                              ].map((name) => (
                                <li>{name}</li>
                              ))}
                            </div>
                            <div class="modal-footer">
                              <button
                                style={{ width: "6rem" }}
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                  handleCancelOrder(elem._id);
                                }}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                : null}
            </table>

            <div
              style={{
                marginTop: "5rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Cancled Orders
            </div>

            {/* Show cancled orders */}
            <table className="col-11">
              <tr className="col-12 Order_table">
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Serial No
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Time
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Order Items
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Restaurant Name
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Quantity
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Price
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Address
                </th>
              </tr>
              {Array.isArray(orders)
                ? cancledOrders.map((elem) => (
                    <>
                      <tr className="col-12 pl-1 pr-1">
                        <td className="pl-1 pr-1">{s2++}</td>
                        <td className="pl-1 pr-1">{elem.time}</td>
                        <td className="pl-1 pr-1">
                          <table style={{ textAlign: "center" }}>
                            {[
                              ...new Set(elem.foodId.map((item) => item.name)),
                            ].map((name) => (
                              <tr>{name}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {[
                              ...new Set(
                                elem.foodId.map((item) => item.restaurent)
                              ),
                            ].map((restaurent) => (
                              <tr>{restaurent}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = (acc[item._id] || 0) + 1;
                                return acc;
                              }, {})
                            ).map(([id, count]) => (
                              <tr>{count}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = {
                                  count:
                                    (acc[item._id] ? acc[item._id].count : 0) +
                                    1,
                                  price: item.price,
                                };
                                return acc;
                              }, {})
                            ).map(([id, { count, price }]) => (
                              <tr>{count * price}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">{elem.orderAddress}</td>
                      </tr>
                      {/* Modal------------------------------------------------------------- */}
                      <div
                        class="modal fade"
                        id={`exampleModal-${elem._id}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-body">
                              Are you sure you want to cancel the order?{" "}
                              {[
                                ...new Set(
                                  elem.foodId.map((item) => item.name)
                                ),
                              ].map((name) => (
                                <li>{name}</li>
                              ))}
                            </div>
                            <div class="modal-footer">
                              <button
                                style={{ width: "6rem" }}
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                  handleCancelOrder(elem._id);
                                }}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                : null}
            </table>

            <div
              style={{
                marginTop: "5rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "2rem",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Delivered Orders
            </div>

            {/* Show delivered orders */}
            <table className="col-11">
              <tr className="col-12 Order_table">
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Serial No
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Time
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Order Items
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Restaurant Name
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Quantity
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Price
                </th>
                <th
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Address
                </th>
                <th
                  className="col-1 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Payment Status
                </th>
              </tr>
              {Array.isArray(orders)
                ? delivereddOrders.map((elem) => (
                    <>
                      <tr className="col-12 pl-1 pr-1">
                        <td className="pl-1 pr-1">{s3++}</td>
                        <td className="pl-1 pr-1">{elem.time}</td>
                        <td className="pl-1 pr-1">
                          <table style={{ textAlign: "center" }}>
                            {[
                              ...new Set(elem.foodId.map((item) => item.name)),
                            ].map((name) => (
                              <tr>{name}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {[
                              ...new Set(
                                elem.foodId.map((item) => item.restaurent)
                              ),
                            ].map((restaurent) => (
                              <tr>{restaurent}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = (acc[item._id] || 0) + 1;
                                return acc;
                              }, {})
                            ).map(([id, count]) => (
                              <tr>{count}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">
                          <table>
                            {Object.entries(
                              elem.foodId.reduce((acc, item) => {
                                acc[item._id] = {
                                  count:
                                    (acc[item._id] ? acc[item._id].count : 0) +
                                    1,
                                  price: item.price,
                                };
                                return acc;
                              }, {})
                            ).map(([id, { count, price }]) => (
                              <tr>{count * price}</tr>
                            ))}
                          </table>
                        </td>
                        <td className="pl-1 pr-1">{elem.orderAddress}</td>
                        <td className="pl-1 pr-1">{elem.paymentStatus}</td>
                      </tr>
                      {/* Modal------------------------------------------------------------- */}
                      <div
                        class="modal fade"
                        id={`exampleModal-${elem._id}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-body">
                              Are you sure you want to cancel the order?{" "}
                              {[
                                ...new Set(
                                  elem.foodId.map((item) => item.name)
                                ),
                              ].map((name) => (
                                <li>{name}</li>
                              ))}
                            </div>
                            <div class="modal-footer">
                              <button
                                style={{ width: "6rem" }}
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => {
                                  handleCancelOrder(elem._id);
                                }}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                : null}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_order;
