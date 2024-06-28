import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import React from 'react';
import Home from './Components/Home';
import './App.css';
import About from "./Components/About"
import Product from "./Components/Product";
import Pricing from "./Components/Pricing";
import Cart from "./Components/Cart";
// import Heater from "./Components/Heater";
import Footer from "./Components/Footer";
import Contact from "./Components/Contactus";

function App() {
  return (
    <div>     
      
   
    <Router>
    <div className='my-header'>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>


    <Footer />
    

    </div>
  );
}

export default App
