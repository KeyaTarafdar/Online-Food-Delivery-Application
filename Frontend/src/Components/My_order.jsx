import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Orderitem_array from "./Array/Orderitem_array";

const My_order = () => {
  const [cancelOrder, setCancelOrder] = useState(false);

  const handleCancelOrder = () => {
    setCancelOrder(true);
  };

  const handleCloseModal = () => {
    setCancelOrder(false);
  };

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
              <h4>BON&nbsp;&nbsp;APETITE</h4>
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
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    borderStyle: "solid",
                    borderColor: "black",
                  }}
                >
                  Serial No
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
                  Order id
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
                  Item Name
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
                  Restaurant Name
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
                  Quantity
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
                  Price
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
                  Address
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
                  Contact our delivery agent
                </th>
              </tr>
            </table>

            <div className="col-12 m-0 p-0 cart_table_items">
              {Orderitem_array.map((elem) => (
                <div
                  key={elem.serial_no}
                  className="row1 col-12 m-0 p-0 Order_table_items_row"
                  style={{ display: "flex" }}
                >
                  <table
                    className="row1 col-12 m-0 p-0 Order_table_items_row"
                    style={{ display: "flex" }}
                  >
                    <tr className="col-11 m-0 p-0 cart_table_items_row">
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        {elem.serial_no}
                      </th>
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        Order Id
                      </th>
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        <img
                          src={elem.img}
                          style={{ height: "45px", width: "70px" }}
                        ></img>
                      </th>
                      <th
                        className="col-2 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        {elem.item_name}
                      </th>
                      <th
                        className="col-2 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        {elem.res_name}
                      </th>
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        {elem.qty}
                      </th>
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        {elem.price}
                      </th>
                      <th
                        className="col-1 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        Address
                      </th>
                      <th
                        className="col-2 pt-2 pb-2"
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        Phone no
                      </th>
                    </tr>
                    <div className="col-1">
                      <button
                        className="btn-sm btn-warning mt-1"
                        onClick={handleCancelOrder}
                      >
                        Cancel Order
                      </button>
                    </div>
                  </table>
                </div>
              ))}
            </div>
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
