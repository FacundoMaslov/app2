import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

import Home from "./components/Home/Home";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";
import Navbar from "./components/Navbar";


const App = () => {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
      async function fetchPeople() {
        let res = await fetch('https://swapi.dev/api/people/?format=json');
        let data = await res.json();
        setPeople(data.results);
      }

      async function fetchPlanets() {
        let res = await fetch('https://swapi.dev/api/planets/?format=json');
        let data = await res.json();
        setPlanets(data.results);
      }

      fetchPeople();
      fetchPlanets();
    }, [])
    
  return (
    <>
      <Router>
         <Navbar/>
         <div className="container">
           <Switch>
             
            <Route exact path="/">
              <Home/>
            </Route >

            <Route exact path="/people">
              <People data={people}/>
            </Route>

            <Route exact path="/planets">
              <Planets data={planets}/>
            </Route>  

           </Switch>
         </div>
      </Router>

    </>
  );
}

export default App;
