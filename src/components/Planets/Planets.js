import React from "react";
import { Grid } from "semantic-ui-react";
import "./Planets.scss";


const Planets =({data})=>{
    return(
        <>

            <h1>Planetas</h1>

            <Grid>
                {data.map((planets, i) =>{
                    return(
                        <div className="container_planets" key={i}>

                            <div className="container_planets_item">
                                {planets.name}
                            </div>

                            <div className="container_planets_item"> 
                                <strong>Clima</strong>
                                <p>{planets.climate}</p>
                                <strong>Diametro</strong>
                                <p>{planets.diameter}</p>
                                <strong>Poblacion</strong>
                                <p>{planets.population}</p>
                            </div>
                        </div>
                    )
                })}
            </Grid>

        </>
    )
}

export default Planets;