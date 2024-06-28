import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Gallery() {
    const [condition,setCondition] = useState(false);

    const showWindow = ()=>{
          setCondition(!condition)
    }
  return (
    <div>
        <button onClick={showWindow}>=</button>
        <div class="sidebar" className={condition === true ? "sidebar open" : "sidebar"}>    
        <div className='footer-menu-items'>
            <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/gallery">Gallery</Link></li>
             <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div> 

        </div>
    </div>
  )
}

export default Gallery