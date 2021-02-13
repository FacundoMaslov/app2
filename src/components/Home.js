import React, {useState} from 'react'
import List from "./List";
import AddForm from "./AddForm";
import {v4 as uuidv4} from "uuid";
import "./Home.css"

const Home =() => {
    const users = []
    const [data, setData] = useState(users)
    
    // agregar usuarios
    const addUser = (dat) =>{
      dat.id = uuidv4()
      setData([...data, dat])
    }
  
    //eliminar usuarios
    const deleteUser =(id)=>{
      setData(data.filter(user => user.id !== id))
    }
  
    //restablecer
  
    const resetUsers =()=>{
      setData("")
    } 
  
  
    return (
  
      <div className="grid-container">
        <div className="grid-app"> 
          <h1>Registro de socios</h1>
        </div>
        <div className="grid-app">
          <AddForm addUser={addUser} resetUsers={resetUsers}/>
        </div>
  
        <div className="grid-app">
          <List data={data} deleteUser={deleteUser} />
        </div>
      </div>
  
  
    );
}

export default Home
