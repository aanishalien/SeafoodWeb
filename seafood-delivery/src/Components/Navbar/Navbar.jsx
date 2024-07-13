import React, { useState } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.jpg'; // Make sure to import the logo
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu,setMenu]= useState("home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Sri Food</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("market")}}><Link  style={{textDecoration:'none'}} to='/market' >Market</Link>{menu==="market"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("delivery areas")}}><Link style={{textDecoration:'none'}} to='/deliveryareas'>Delivery Areas</Link>{menu==="delivery areas"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about us")}}><Link style={{textDecoration:'none'}} to='/aboutus'>About us</Link>{menu==="about us"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
