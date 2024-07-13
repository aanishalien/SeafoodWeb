import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import Fishdish from '../Assets/Fishdish.jpg'

const Hero =()=>{
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Seafood Items</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Sales</p>
                    <p>For everyone</p>
                </div>
            </div>
            <div className='hero-latest-btn'>
                <div>Lastest Sales</div>
                <img src={arrow_icon} alt="" />
            </div>
            <div className="hero-right">
                <img src={Fishdish} alt="" />
            </div>
        </div>
    )
}

export default Hero