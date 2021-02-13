import React from 'react'
import {Link} from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Navbar = () => {
    return (
        <Menu inverted>
            <Container>
                <Link to="/">
                    <Menu.Item>Menu</Menu.Item>   
                </Link>    

                <Link to ="/people">
                    <Menu.Item> Personajes</Menu.Item>        
                </Link>

                <Link to ="/planets">
                    <Menu.Item>Planetas</Menu.Item>       
                </Link>
            </Container>


        </Menu>
    )
}

export default Navbar;
