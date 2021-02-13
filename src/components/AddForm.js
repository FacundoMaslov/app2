import React from "react";
import {useForm} from "react-hook-form"

const AddForm = (props) =>{
    
    const {addUser, resetUsers} = props;
    const {register,handleSubmit} = useForm(); 


    const onSubmit = (data, e) =>{
        addUser(data)
        e.target.reset();
    }

    return(
        <div>
            <h2>Agregar Socios</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label><br/>
                    <input type="text" name="name" 
                        ref={
                            register({
                                required: {value: true, message: "Campo requerido"}
                            })
                        }>
                    </input>
                </div>
                
                <div>
                    <label>Apellido</label> <br/>
                    <input type="text" name="surname" 
                        ref={
                            register({
                                required: {value: true, message: "Campo requerido"}
                            })
                        }>
                    </input>
                </div>             

                <div> 
                    <label>Edad</label><br/>
                    <input type="number" name="age" 
                        ref={
                            register({
                                required: {value: true, message: "Campo requerido"}
                            })
                        }>
                    </input>
                </div>


                <button>Agregar</button>
                <button onClick={()=>resetUsers()}>Reset</button>
            </form>
        </div>

    )
}


export default AddForm;