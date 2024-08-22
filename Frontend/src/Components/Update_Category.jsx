import React, { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const Update_Category = ({ serial, name, img }) => {

    const [clicked_name, setClicked_name] = useState(false)

    const [clicked_img, setClicked_img] = useState(false)

    const handleClick_name = () => {
        setClicked_name(!clicked_name)
    }
    const handleClick_img = () => {
        setClicked_img(!clicked_img)
    }


    return (
        <>
            <div className="col-12 m-0 p-0 d-flex pt-1 pb-1" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{serial}</div>
                <div className="col-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>{name}</div>
                <div className="col-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }} onClick={handleClick_name}><HiPencil /></div>
                <div className="col-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}><img src={img} style={{ height: '100%', width: '30%' }}></img></div>
                <div className="col-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }} onClick={handleClick_img}><HiPencil /></div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}><RiDeleteBin6Line /></div>
            </div>
            {clicked_name ? (
                <div className="pb-4">
                    <div class="pb-2 pt-2">
                        <h5 class="modal-title">Change the Name of '{name}'</h5>
                    </div>
                    <div class=" col-5 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                        <div className="pt-2">
                            <input className="mt-3 form-control" type="text" placeholder="Enter Restaurent Name..."></input>
                        </div>
                        <div className="mt-4 pb-2">
                            <button type="button" class="btn btn-success" data-dismiss="modal" onClick={handleClick_name}>Ok</button>
                        </div>
                    </div>
                </div>) : ('')}

            {clicked_img ? (
                <div className="pb-4">
                    <div class="pb-2 pt-2">
                        <h5 class="modal-title">Change the Image of '{name}'</h5>
                    </div>
                    <div class=" col-5 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                        <div className="pt-2">
                            <input className="mt-3 form-control" type="file"></input>
                        </div>
                        <div className="mt-4 pb-2">
                            <button type="button" class="btn btn-success" data-dismiss="modal" onClick={handleClick_img}>Ok</button>
                        </div>
                    </div>
                </div>) : ('')}
        </>
    )
}

export default Update_Category