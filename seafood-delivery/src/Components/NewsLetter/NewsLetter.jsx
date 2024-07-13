import React from 'react';
import './NewsLetter.css'

const NewsLetter =()=>{
    return (
        <div className='newsletter'>
            <h1>Get Information from us </h1>
            <p>Subscribe to our NewsLetter and Stay Updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter