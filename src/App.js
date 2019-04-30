import React from 'react';
import './App.css';
import cities from "./cities.json"
import City from "./City"
import Chroma from "chroma-js"

class App extends React.Component {
  state = {
    continents: [
      "America",
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ],
    displayedCities: [],
    temp: []
  }

  showCities(continent) {

    let filtered = cities.filter(city => city.continent === continent)
    let temp = filtered.map(city => city.temperature)
    
    this.setState ({
      ...this.state,
      displayedCities: filtered,
      temp: temp      
    })
  }

  tempColor(temp) {
    let scale = Chroma.scale(["blue", "red"]).domain([Math.min(...this.state.temp), Math.max(...this.state.temp)])
    return scale(temp)
  }


  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            {this.state.continents.map((continent, idx) =>
                <li key={idx}><button onClick={() => this.showCities(continent)}>{continent}</button></li>
            )}
          </ul>
        </nav>
        <section>
          <ul>
            {this.state.displayedCities.sort((a, b) => a.temperature - b.temperature).map((city, idx) =>
              { 
                return <City key={idx} {...city} color={this.tempColor(city.temperature)}/>
              }
            )}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}

export default App;
