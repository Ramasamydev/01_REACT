import React, {useState} from 'react'
import Iteration from '../Components/Iteration'
import Inputlength from '../Components/Inputlength';
import Dropdown from '../Components/Dropdown';
import Arithmatics from '../Components/Arithmatics';

function Usestatelist() {
const somedata = [
      {id:1,fName:"Sathiyan",lName:"Kumar",email:"sathiyan@gmail.com",role:"fullstack developer"},
      {id:2,fName:"Sneha",lName:"Kumar",email:"Sneha@gmail.com",role:"fullstack developer"},
      {id:3,fName:"Deepika",lName:"Kumar",email:"Deepika@gmail.com",role:"mernstack developer"},
      {id:4,fName:"Manisha",lName:"Kumar",email:"Manisha@gmail.com",role:"fullstack developer"},
      {id:5,fName:"Devnddiran",lName:"Kumar",email:"Devnddiran@gmail.com",role:"angular developer"},
      {id:6,fName:"Nagaraj",lName:"Kumar",email:"Nagaraj@gmail.com",role:"fullstack developer"},
      {id:7,fName:"Meganathan",lName:"Kumar",email:"Meganathan@gmail.com",role:"fullstack developer"},
      {id:8,fName:"Sathish",lName:"Kumar",email:"Sathish@gmail.com",role:"react developer"},
 ]

 const [counter,setCounter] = useState(0);

 const increment = ()=>{
     setCounter(counter+1);
 }

 const decrement = ()=>{
    setCounter(counter-1);
}

  return (
    <div>
        
        <Iteration data={somedata} />

        <hr />

        <div>
            <h1 style={{color: counter>=0 ? "green" : "red"}}>{counter}</h1>     
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

        <Inputlength />
        <Arithmatics />
        <br />
        <Dropdown />

    </div>
  )
}

export default Usestatelist