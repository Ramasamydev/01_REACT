import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
  const [username,setuserName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [phone,setPhone] = useState("")
  const [role,setRole] = useState("")
  const [id,setId] = useState("")
  const [msg,setMsg]=useState("")
const redirection = useNavigate();

useEffect(()=>{
    setId(localStorage.getItem("id"))
    setuserName(localStorage.getItem("username"))
    setEmail(localStorage.getItem("email"))
    setPhone(localStorage.getItem("phone"))
    setAddress(localStorage.getItem("address"))
    setRole(localStorage.getItem("role"))
},[])

const updateFormData = async(e)=>{
     e.preventDefault();
     await axios.put(`https://667eb6c8f2cb59c38dc6c78c.mockapi.io/details/${id}`,{
        username,email,phone,role,address
     })
     .then((r)=>{
        console.log("user Updated");
        setMsg("Data Updated")
        setTimeout(()=>{
          redirection("/userlist")
        },1000)
       
     })
     .catch((err)=>{
        console.log(err);
     })

}
  return (
    <div>
       <h1>Update the user</h1>
       <div className="container">
            <div className="row">
                 
                 <div className="col-md-6 offset-md-3 py-5">
                    <h2>Register Details</h2>
                     <form onSubmit={updateFormData}>
                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control'
                             placeholder='Enter Username' value={username} onChange={e=>setuserName(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="email"  className='form-control' 
                            placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control' 
                            placeholder='Enter address' value={address} onChange={e=>setAddress(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control' 
                            placeholder='Enter phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control'
                             placeholder='Enter Role' value={role} onChange={e=>setRole(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <button type="submit" class="btn btn-primary">Update User </button>
                        </div>
                     
                     </form>
                     <h3>{msg}</h3>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Update
