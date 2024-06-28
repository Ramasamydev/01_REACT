import React,{useState} from 'react'
import ColorChanges from '../Components/Colorchanges'
import ShowTexts from '../Components/Showtexts'

function Usestate() {

     const [mycourse,setMycourse] = useState("I am learning javascript.");

        setTimeout(()=>{
            setMycourse("I am learning react")
        }, 4000)

   const  [course,setCourse] = useState("")
   const changeText = ()=>{
        setCourse("Started Learning.. React")
   }
     const [condition,setCondition] = useState(true);     
     const changeName = ()=>{
         setCondition(!condition)
     }

    const [pageCondtion,setPageCondition] = useState(false)
    const showPages = ()=>{
        setPageCondition(!pageCondtion)
    }

    const [inputval,setInputval] = useState("im sathish")
   
  return (
    <div>
        <h1>{mycourse}</h1>

        <h1>{course}</h1>

         <button onClick={changeText}>Change Text</button>

         <br />
         <br />
         <button onClick={changeName}>Change Name</button>
         
        <h1> {condition === true ? "Deepak" : "Daniel"} </h1>       

        <div>
         {pageCondtion === true ?  <ColorChanges/> :  <ShowTexts/>  }

            <button onClick={showPages}>Toggle Pages</button>
        </div>
  <br />
        <div>
        <input type="text" placeholder='Enter some value' onChange={(e)=>setInputval(e.target.value)}/>
         <h1>{inputval}</h1>
         </div>

    </div>
  )
}

export default Usestate