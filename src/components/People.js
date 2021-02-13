import React from "react";
import { Card, CardContent, Grid } from "semantic-ui-react";


const People =({data})=>{

    console.log(data);
    return(
        <>
            <h1>Personajes</h1>
            <Grid>
            {data.map((people, i) =>{
                return(
                    <Grid.Column key={i}>
                        <Card>
                            <CardContent>
                                <Card.Header>
                                    {people.name}
                                </Card.Header>
                                <Card.Description>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    <p>{people.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{people.hair_color}</p>
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

export default People;