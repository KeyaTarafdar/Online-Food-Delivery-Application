import React from "react";
import { useState } from "react";
import { confirmOrderDelete } from "../utils/utils";

const Table_row = ({
  serial,
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
  price,
  otp,
  deliveryBoyName,
  deliveryBoyPhone,
  isDeleted,
}) => {
  const color = isDeleted ? "red" : "black";
  const display = isDeleted ? "block" : "none";

  const style = {
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
    color: color,
  };

  return (
    <>
      <div
        className="col-12 m-0 p-0 d-flex pt-1 pb-1"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <div className="col-1" style={style}>
          {serial}
        </div>
        <div className="col-1" style={style}>
          {name}
        </div>
        <div className="col-1" style={style}>
          {phone}
        </div>
        <div className="col-3" style={style}>
          {address}
        </div>
        <div className="col-2" style={style}>
          {time}
        </div>
        <div className="col-2" style={style}>
          {id}
        </div>
        <div className="col-1" style={style}>
          {delivery_sts}
        </div>
        <div className="col-2" style={style}>
          {deliveryBoyName}
        </div>
        <div className="col-1" style={style}>
          {deliveryBoyPhone}
        </div>
        <div className="col-1" style={style}>
          {payment_sts}
        </div>
        <div className="col-1" style={style}>
          {payment_mode}
        </div>
        <div className="col-2" style={style}>
          {payment_id}
        </div>
        <div className="col-1" style={style}>
          {otp}
        </div>
        <div className="col-1" style={style}>
          <button
            className="btn-xs btn-success"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Check
          </button>
        </div>
        <button className="btn-xs btn-success" style={{display:display}} onClick={()=>{confirmOrderDelete(id).then((response)=>alert(response))}}>Ok</button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Order Info
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex">
              <div className="col-5">
                {/* <div className=""><b>FoodItem</b></div><br></br>
                                {food.map(name => (
                                    <div>
                                        {name}
                                    </div>
                                ))} */}
              </div>
              <div className="col-2">
                <div className="">
                  <b>Quantity</b>
                </div>
                <br></br>
                {/* {qty.map(qty => (
                                    <div>
                                        {qty}
                                    </div>
                                ))} */}
              </div>
              <div className="col-3">
                <div className="">
                  <b>Restaurent</b>
                </div>
                <br></br>
                {/* {res.map(name => (
                                    <div>
                                        {name}
                                    </div>
                                ))} */}
              </div>
              <div className="col-2">{price}</div>
            </div>
            <div className="">
              <h6>Total Price:</h6>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table_row;
