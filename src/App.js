import React from 'react';
import chroma from 'chroma-js';
import cities from './cities.json'
import City from './components/city/City'
import "./weather-icons-master/css/weather-icons.css"
import './App.css';

class App extends React.Component {
  state = {
    continents: [
      "America",
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ],
    cities: [],
    average : 0,
    temperature : []
  }


  showCities(continent) {
    let allThecities = [...cities];
    let citiesContinent = allThecities.filter(city => city.continent === continent).sort((a,b) => a.temperature - b.temperature);
    let totalAverage = citiesContinent.reduce((a,b) => {
        return a + b.temperature
    }, 0) / citiesContinent.length;
    let temperature = citiesContinent.map((city) => city.temperature);

    let colorScale = chroma.scale(['rgb(0,0,255)', 'rgb(255,0,0)']).domain([temperature[0], temperature[temperature.length-1]]);
    let color = colorScale(cities);

    this.setState({
      ...this.state,
      cities: citiesContinent,
      average: totalAverage,
      temperature: temperature
    })

  }


  render() {
    const buttonContinent = 
      this.state.continents.map((continents,i) => {
        return (
          <React.Fragment key={i}>
            <button className="btn" type="button" onClick={() => this.showCities(continents)}>{[...continents]}</button>
          </React.Fragment>
        )
      });
    const showCieties = 
    this.state.cities.map((cities,i) => {
      return (
        <React.Fragment key={i}>
          <City {...cities} />
        </React.Fragment>
      )
    });  
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>{buttonContinent}</li>
          </ul>
        </nav>
        <section className="weatherSection">
          {showCieties}
        </section>
        <h2 className="average">Total average:{this.state.average}</h2>
      </React.Fragment>
    )
  }
}

export default App;
