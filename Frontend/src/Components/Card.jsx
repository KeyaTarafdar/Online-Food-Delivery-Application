import React from "react";
import { useState } from "react";

const Card = ({ name, image, price, restaurent }) => {

    const options = [
        {
            label: "1",
            value: 1
        },
        {
            label: "2",
            value: 2
        },
        {
            label: "3",
            value: 3
        },
        {
            label: "4",
            value: 4
        }
    ]
    const [clicked, setClicked] = useState(false)

    const handleClick1 = () => {
        setClicked(true)
    }

    return (
        <>
            <div className="col-12 col-md-3 mt-3 float-left">
                <div className="card m-2">
                    <div className="m-0 p-0" style={{ height: '340px', color: 'black', borderRadius: '0.75rem' }}>
                        <div className="justify-center items-center" style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem', backgroundColor: 'indigo', height: '60%' }}>
                            <img src={`/foodItemsPictures/${image}`} alt='' className="" style={{ borderTopLeftRadius: '0.20rem', borderTopRightRadius: '0.20rem', height: '100%', width: '100%', margin: 'auto' }}></img>
                        </div>

                        <div className='flex flex-col justify-center items-center m-0 p-0' style={{ height: '20%' }}>
                            <h5 className="mt-1">{name}</h5>
                            <h6 className='mt-1'>{restaurent}</h6>
                            <span className=''>Price: {price}/-</span>
                            <select className='form-select ml-3'>
                                {options.map(option => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>


                        <div className='pt-4' onClick={handleClick1}>
                            {clicked ?
                                (
                                    <button className='btn-xs btn-warning'>Go to Cart</button>
                                ) :
                                (
                                    <button className='btn-xs btn-warning'>Add to Cart</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card