import React from "react";
import {Grid} from "semantic-ui-react";
import "./People.scss";


const People =({data})=>{

    console.log(data);
    return(
        <>
            <h1>Personajes</h1>
            <Grid>
            {data.map((people, i) =>{
                return(
                    <div className="container_people" key={i}>
                        <div className="container_people_item">
                            {people.name}
                        </div>

                        <div className="container_people_item">
                            <strong>Altura</strong>
                            <p>{people.height}</p>
                            <strong>Peso</strong>
                            <p>{people.mass}</p>
                            <strong>Color de pelo</strong>
                            <p>{people.hair_color}</p>
                        </div>
                    </div>
                )
            })}
            </Grid>

        </>
    )
}

export default People;