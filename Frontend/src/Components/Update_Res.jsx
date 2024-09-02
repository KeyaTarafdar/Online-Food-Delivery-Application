import React, { useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const Update_Res = ({ serial, name, img, id, address }) => {   

    const [clicked_update, setClicked_update] = useState(false)

    
    const handleClick_update = () => {
        setClicked_update(!clicked_update)
    }


    return (
        <>
            <div className="col-12 m-0 p-0 d-flex pt-1 pb-1" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }}>{serial}</div>
                <div className="col-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }}>{name}</div>        
                <div className="col-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }}><img src={img} style={{ height: '100%', width: '20%' }}></img></div>
                <div className="col-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }}>{address}</div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }} onClick={handleClick_update}><HiPencil /></div>
                <div className="col-1" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',height:"3rem",display:"flex",justifyContent:"center",alignItems:"center" }} data-toggle="modal" data-target="#exampleModal"><RiDeleteBin6Line /></div>
            </div>
            {clicked_update ? (
                <div className="pb-4">
                    <div class="pb-2 pt-2">
                        <h5 class="modal-title">Change the Details of '{name}'</h5>
                    </div>
                    <div class=" col-5 m-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset' }}>
                        <div className="pt-2">
                            <input className="mt-3 form-control" type="text" placeholder="Enter New Restaurent Name..."></input>
                        </div>
                        <div>
                            <form class="form">
                                <span class="form-title">Upload New Restaurent Image</span>
                                <p class="form-paragraph">
                                    File should be an image
                                </p>
                                <label for="file-input" class="drop-container">
                                    <span class="drop-title">Drop files here</span>
                                    or
                                    <input type="file" accept="image/*" required="" id="file-input" />
                                </label>
                            </form>
                        </div>
                        <div className="mt-4 pb-4">
                            <button style={{width:"6rem"}} type="button" class="btn btn-success" data-dismiss="modal" onClick={handleClick_update}>OK</button>
                        </div>
                    </div>
                </div>) : ('')}

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            Do you want to delete the Restaurent?
                        </div>
                        <div class="modal-footer">
                            <button style={{width:"6rem"}} type="button" class="btn btn-danger" data-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_Res