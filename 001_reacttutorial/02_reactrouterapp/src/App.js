import React from "react";
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      <Router>
      <Routes>
             <Route exact path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/services' element={<Services/>}></Route>
             <Route path='/gallery' element={<Gallery/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
         </Routes>  
         <Footer/>          
      </Router>
    </div>
  );
}

export default App;
