import React from "react";
import { useState } from "react";

const Table_row = ({ serial, name, phone, address, time, id, delivery_sts, payment_sts, payment_mode, payment_id, food, qty, res, price }) => {

    const sum = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <>
            <div className="col-12 m-0 p-0 d-flex pt-1 pb-1" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{serial}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{name}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{phone}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{address}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{time}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{id}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{delivery_sts}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{payment_sts}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{payment_mode}</div>
                <div className="col-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{payment_id}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}><button className="btn-xs btn-success" data-toggle="modal" data-target="#exampleModal">Check</button></div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Order Info</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex">
                            <div className="col-5">
                                <div className=""><b>FoodItem</b></div><br></br>
                                {food.map(name => (
                                    <div>
                                        {name}
                                    </div>
                                ))}
                            </div>
                            <div className="col-2">
                                <div className=""><b>Quantity</b></div><br></br>
                                {qty.map(qty => (
                                    <div>
                                        {qty}
                                    </div>
                                ))}
                            </div>
                            <div className="col-3">
                                <div className=""><b>Restaurent</b></div><br></br>
                                {res.map(name => (
                                    <div>
                                        {name}
                                    </div>
                                ))}
                            </div>
                            <div className="col-2">
                                <div className=""><b>Price</b></div><br></br>
                                {price.map(name => (
                                    <div>
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=""><h6>Total Price: {sum}</h6></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table_row