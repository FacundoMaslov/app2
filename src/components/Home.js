import React, {useState} from 'react'
import List from "./List/List";
import AddForm from "./AddForm/AddForm";
import {v4 as uuidv4} from "uuid";
import "./Home.scss"

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
  
      <div className="container_home">

        <div className="container_home_item"> 
          <h1>Registro de socios</h1>
        </div>
        <div className="container_home_item">
          <AddForm addUser={addUser} resetUsers={resetUsers}/>
        </div>
  
        <div className="container_home_item">
          <List data={data} deleteUser={deleteUser} />
        </div>
      </div>
  
  
    );
}

export default Home
