import React, { Component } from 'react';
import './App.css';
import StarDisplay from './components/StarDisplay.js';
import NextBackButton from './components/NextBackButton.js';


class App extends Component {
  constructor() {
    super();
    this.state =    {
      starwarsChars: [
           /* {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }, 
        {
            "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:10:51.357000Z", 
            "edited": "2014-12-20T21:17:50.309000Z", 
            "url": "https://swapi.co/api/people/2/"
        },*/
      ]
      
    }; 
  }

  componentDidMount() {
   this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
       this.setState({ starwarsChars : data.results });
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  };

  render() {
    
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <StarDisplay  
            starwarsChars =  {this.state.starwarsChars}
        />

        <NextBackButton />

      </div>
    );
  }
}

export default App;
