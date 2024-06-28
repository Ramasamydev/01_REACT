import React from "react";
import { useState } from "react";
import './index.css'

function App() {
    const [tasklist, setTasklist] = useState([]);
    const [task, setTask] = useState("");
    const [message, setMessage] = useState("");
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const ma = m.toString();
    const mp = ma.padStart(2,'0');
    const s = date.getSeconds();
    const sa = s.toString();
    const sp = sa.padStart(2,'0');

    const addTask = () => {      
     const newTaskitem =  {
        id : tasklist.length === 0 ? 1 : (tasklist.length)+1,    
        time: h + " : " + mp + " : " + sp,    
        taskName : task
      }
      
      
      setTasklist([...tasklist, newTaskitem])
    }

    const deleteItem = (id) =>{
      const newTaskList = tasklist.filter((task)=>{
        return task.id !== id
      })
      setTasklist(newTaskList)

      setMessage(id + " Deleted")
    }   

    
    
  return (
    <div>    
         <div className="container">

          <div className="inputItem">

            <input type="text" placeholder='Enter task' onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            </div>  

          <div className="listItems">
            <h3>Total record : {tasklist.length}</h3>
            <h3>Item ID : {message}</h3>            
            <ul>
              <li>
                <span><strong>ID</strong></span>
                <span><strong>TIME (HH:MM:SS)</strong></span>
                <span><strong>TASK</strong></span>
                <span><strong>ACTION</strong></span>                
              </li>           
            </ul>
            
           
          <ul>
          {
            tasklist.map((task)=>{
              return(
                
                <li key={task.id}>                             
                <span>{task.id}</span>
                <span>{task.time}</span>
                <span>{task.taskName}</span>
                <button onClick={()=>deleteItem(task.id)}>Remove</button>               
                
                </li>
              )
            })
          }
        </ul>
      </div>          
      </div>
    </div>
  );
}

export default App
