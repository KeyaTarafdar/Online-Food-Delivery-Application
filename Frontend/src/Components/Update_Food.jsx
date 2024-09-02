import React, { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import Category_array from "./Array/Category_array";
import Restaurant_list_array from "./Array/Restaurent_list_array";

const Update_Food = ({ serial, name, categori, img, price, res, qty }) => {
  const [clicked_update, setClicked_update] = useState(false);

  const handleClick_Update = () => {
    setClicked_update(!clicked_update);
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
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {serial}
        </div>
        <div
          className="col-3"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {name}
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          <img style={{ height: "100%", width: "70%" }} src={img}></img>
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {categori}
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {price}
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {qty}
        </div>
        <div
          className="col-2"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          {res}
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
          onClick={handleClick_Update}
        >
          <HiPencil />
        </div>
        <div
          className="col-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
        >
          <RiDeleteBin6Line />
        </div>
      </div>
      {clicked_update ? (
        <div className="pb-4">
          <div class="pb-2 pt-2">
            <h5 class="modal-title">Change the Details of '{name}'</h5>
          </div>
          <div
            class=" col-5 m-auto"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          >
            <div className="pt-2">
              <input
                className="mt-3 form-control"
                type="text"
                placeholder="Enter Food Name..."
              ></input>
            </div>
            <div className="pt-2">
              <input
                className="mt-3 form-control"
                type="text"
                placeholder="Enter Price..."
              ></input>
            </div>
            <div className="pt-2">
              <input
                className="mt-3 form-control"
                type="text"
                placeholder="Enter Quantity..."
              ></input>
            </div>
            <div className="d-flex mt-3 p-0">
              <select
                className="form-select ml-1"
                style={{
                  width: "35rem",
                  height: "2.2rem",
                  borderRadius: "4px",
                }}
              >
                <option value="" disabled selected>
                  Select Item Category...
                </option>
                {Category_array.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
            <div className="d-flex mt-3 p-0">
              <select
                className="form-select ml-1"
                style={{
                  width: "35rem",
                  height: "2.2rem",
                  borderRadius: "4px",
                }}
              >
                <option value="" disabled selected>
                  Select Restaurent Name...
                </option>
                {Restaurant_list_array.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
            <div>
              <form class="form">
                <span class="form-title">Upload Your Food Image</span>
                <p class="form-paragraph">File should be an image</p>
                <label for="file-input" class="drop-container">
                  <span class="drop-title">Drop files here</span>
                  or
                  <input
                    type="file"
                    accept="image/*"
                    required=""
                    id="file-input"
                  />
                </label>
              </form>
            </div>

            <div className="mt-4 pb-4">
              <button
                style={{ width: "6rem" }}
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                onClick={handleClick_Update}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Update_Food;
