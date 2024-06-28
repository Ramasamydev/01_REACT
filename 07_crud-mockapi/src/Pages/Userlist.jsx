import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Userlist() {
  const [apiData,setApiData]= useState([]);
  const redirect = useNavigate();
  const apiCollect = async()=>{
      await axios.get("https://667eb6c8f2cb59c38dc6c78c.mockapi.io/details")
      .then((res)=>{
          console.log(res);
          setApiData(res.data)
      }).catch((err)=>{
          console.log(err);
      })
  }
  useEffect(()=>{
    apiCollect()
  },[])

  const deleteData = (id)=>{
      axios.delete(`https://667eb6c8f2cb59c38dc6c78c.mockapi.io/details/${id}`)
      .then((res)=>{
         console.log("Data Deleted");
         apiCollect()
      }).catch((err)=>{
          console.log(err);
      })
  }

  const upateUser = ({id,username,email,phone,role,address})=>{
    redirect("/update")
    localStorage.setItem("id",id)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("role", role)
    localStorage.setItem("address", address)
  }

 
 
  return (
    <div>
         <div className="container">
          <div className="row">
              {
                apiData.map((res)=>{
                   return(
                     <div className='col-md-4 py-5 mb-3 mt-2' key={res.id}>
                         <img src={res.avatar}/>
                         <h2>{res.username}</h2>
                         <h4>{res.email}</h4>
                         <h4>{res.phone}</h4>
                         <h4>{res.address}</h4>
                         <h5>{res.createdAt}</h5>
                         <h6>{res.role}</h6>
                         <button className='btn btn-danger me-2' onClick={(e)=>deleteData(res.id)}>Delete</button>
                         <button className='btn btn-info' onClick={()=>upateUser(res)}>Update User</button>

                     </div>
                   )
                })
              }
          </div>
         </div>
    </div>
  )
}

export default Userlist
