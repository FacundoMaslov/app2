import React from "react";
import { Card, CardContent, Grid } from "semantic-ui-react";


const Planets =({data})=>{
    return(
        <>
        <h1>Planetas</h1>
        <Grid>
        {data.map((planets, i) =>{
            return(
                <Grid.Column key={i}>
                    <Card>
                        <CardContent>
                            
                            <Card.Header>
                                {planets.name}
                            </Card.Header>

                            <Card.Description>
                                <strong>Climate</strong>
                                <p>{planets.Climate}</p>
                                <strong>Diameter</strong>
                                <p>{planets.diameter}</p>
                                <strong>Population</strong>
                                <p>{planets.population}</p>
                            </Card.Description>

                        </CardContent>
                    </Card>
                </Grid.Column>
            )
        })}
        </Grid>

    </>
    )
}

export default Planets;