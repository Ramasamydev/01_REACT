import React, {useState} from 'react'
import './CSS/mystyle.css'

function App() {
  const [condition, setCondition] = useState(true)

  const changemode = ()=>{
    setCondition(!condition)
  }


  return (
    <div>
      <div className={condition==true ? "bright" : "dark"}>
         <button onClick={changemode}>CHANGE MODE</button>
         <h1>Hello World</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus aperiam quas velit, qui repudiandae ad vel, maiores perspiciatis, mollitia perferendis illum modi? Nobis eum sequi, accusantium ducimus ipsam a?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga illum, qui reiciendis harum consequuntur ducimus corporis, consequatur architecto ullam necessitatibus assumenda ut. Minus maiores architecto placeat minima ipsa molestias.</p>
         <hr />
         <h1>Welcome</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas magnam, expedita error reiciendis maxime iure necessitatibus fugiat incidunt eum, dignissimos quo commodi, est suscipit. Provident est facilis illum repellendus asperiores?</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam id aliquid veniam ab nobis hic incidunt doloremque, autem harum fugit reprehenderit dicta similique fugiat ipsam perspiciatis quaerat modi inventore.</p>
         <hr />
         <h1>Hello World</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus aperiam quas velit, qui repudiandae ad vel, maiores perspiciatis, mollitia perferendis illum modi? Nobis eum sequi, accusantium ducimus ipsam a?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga illum, qui reiciendis harum consequuntur ducimus corporis, consequatur architecto ullam necessitatibus assumenda ut. Minus maiores architecto placeat minima ipsa molestias.</p>
         <hr />
         <h1>Welcome</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas magnam, expedita error reiciendis maxime iure necessitatibus fugiat incidunt eum, dignissimos quo commodi, est suscipit. Provident est facilis illum repellendus asperiores?</p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum totam id aliquid veniam ab nobis hic incidunt doloremque, autem harum fugit reprehenderit dicta similique fugiat ipsam perspiciatis quaerat modi inventore.</p>
      </div>
      

    </div>
  )
}

export default App