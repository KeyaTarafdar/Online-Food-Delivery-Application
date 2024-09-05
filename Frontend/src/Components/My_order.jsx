// My_order.jsx
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  fetchCompanyDetails,
  fetchOrderById,
  cancelSingleOrder,
} from "../utils/utils";

const My_order = () => {
  const [companyName, setcompanyName] = useState();

  const [cancelOrder, setCancelOrder] = useState(false);

  const [orders, setorders] = useState([]);

  const handleCancelOrder = (id) => {
    setCancelOrder(true);
    cancelSingleOrder(id).then((response) => {
      alert(response);
    });
  };

  const handleCloseModal = () => {
    setCancelOrder(false);
  };

  useEffect(() => {
    // Fetch company details
    fetchCompanyDetails().then((company) => {
      setcompanyName(company.name.toUpperCase());
    });

    fetchOrderById().then((response) => {
      setorders(response.orders);
    });
  }, [handleCancelOrder]);

  let s = 1;

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
                  className="col-2 pt-2 pb-2"
                  style={{
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Contact our delivery agent
                </th>
              </tr>
              {Array.isArray(orders)
                ? orders.map((elem) => (
                    <tr className="col-12 pl-1 pr-1">
                      <td className="pl-1 pr-1">{s++}</td>
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
                                  (acc[item._id] ? acc[item._id].count : 0) + 1,
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
                      <td className="pl-1 pr-1">{elem.phone}</td>
                      <td className="col-2">
                        <button
                          className="btn-sm btn-warning mt-1"
                          onClick={() => {
                            handleCancelOrder(elem._id);
                          }}
                        >
                          Cancel Order
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </table>
          </div>
        </div>
      </div>

      {/* Modal------------------------------------------------------------- */}
      {cancelOrder && (
        <div
          className="modal show fade"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cancel Order</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to cancel the order?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleCloseModal}
                >
                  Confirm Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default My_order;