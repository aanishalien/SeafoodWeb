import React from 'react'
import './Offers.css'
import Fishdish from '../Assets/Fishdish.jpg'

const Offers =()=>{
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exculsive</h1>
                <h1>Offers For you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={Fishdish} alt="" />
            </div>
        </div>
    )
}

export default Offers