import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignUp';
import Hero from './Components/Hero/Hero' // Remove this line if Hero is not used
import Footer from './Components/Footer/Footer';
import product_1 from './Components/Assets/Fishdish.jpg'
import product_2 from './Components/Assets/red-snapper.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        
        <Routes>
          
          <Route path='/home' element={<Shop/>} category="home"/>
          <Route path='/market' element={<ShopCategory banner ={product_1} category="market" />} />
          <Route path='/deliveryareas' element={<ShopCategory banner ={product_2} category="delivery areas" />} />
          <Route path='/aboutus' element={<ShopCategory category="about us" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
