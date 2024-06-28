import React, { useEffect, useState } from 'react'
import  axios from "axios"
import "./App.css"

function App() {
   const [apidata,setApiData] = useState([])

  //  fetch("https://jsonplaceholder.typicode.com/posts/")
  //  .then((res)=>{
  //   return res.json()
  //  })
  //  .then((res)=>{
  //   console.log(res)
  //  })

  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts/")
   .then((res)=>{
        setApiData(res.data)
        console.log(res.data);
   })
  },[])
  return (
    <div>
      <section>
      <div className='container'>
          <div className="list">
               {
                apidata.map((res)=>{
                  return(
                    <div key={res.id}>
                      <h3>{res.id}</h3>
                      <h5>{res.title}</h5>
                      <p>{res.body}</p>
                    </div>
                  )
                })
               }
          </div>              
         </div>
      </section>
         
    </div>
  )
}

export default App
