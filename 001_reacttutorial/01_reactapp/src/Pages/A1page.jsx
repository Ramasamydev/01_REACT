import React from 'react'
import About from '../Components/About';
import Gallery from '../Components/Gallery';

function A1page() {

    const opentext = () =>{
        alert('Hi, Thanks for clicking me!!!')
      }
      const arr = [2,3,4,5,6,"one","two","three"];
      const myaddress = "I am from Chennai";
      
    return (
      <>
        <h1>Welcome Aimore from A1page</h1>
        <button onClick={opentext}>CLICK</button>

        <About address = {myaddress} arrdata ={arr}/>

        <Gallery newaddress= {myaddress}/>
      </>
    );
}

export default A1page