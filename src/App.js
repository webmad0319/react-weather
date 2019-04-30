import React from 'react';
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
    cities: []
  }


  showCities(continent) {
    let allThecities = [...cities];
    let citiesContinent = allThecities.filter(city => city.continent === continent);

    this.setState({
      ...this.state,
      cities: citiesContinent
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
      </React.Fragment>
    )
  }
}

export default App;
