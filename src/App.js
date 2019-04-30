import React from 'react';
import './App.css';
import weather from './cities.json';
import City from './City';

class App extends React.Component {
  state = {
    continents: [
      "America",
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ],
    continentIndex: null,
    weatherData: []
  }

  changeContinent(continent){
    let continents = this.state.continents;
    let nextContinentIndex = continents.indexOf(continent);
    if(nextContinentIndex === -1) return;
    
    if(nextContinentIndex === this.state.continentIndex){
      this.setState({
        ...this.state, 
        continentIndex: null,
        weatherData: null
      });
      return;
    }

    this.setState({
      ...this.state,
      continentIndex: nextContinentIndex,
      weatherData: weather.filter(city => city.continent === continents[nextContinentIndex])
    });

  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            {this.state.continents.map((continent, index) => {
              return (
                <li key={continent}><button onClick={()=>this.changeContinent(continent)}>{continent}</button></li>
              );
            })}
          </ul>
        </nav>
        <section className="weather-list">
          {
            (this.state.weatherData && this.state.weatherData.length > 0) ?
          this.state.weatherData.map((city, index) => <City key={city.city} {...city}/>) :
            <p>Please, select a continent to show the weather</p>
          }
        </section>
      </React.Fragment>
    )
  }
}

export default App;
