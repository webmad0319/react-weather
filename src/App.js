import React from 'react';
import './App.css';
import cities from "./cities.json";
import Cities from "./Cities";

class App extends React.Component {
  constructor() {
    super();
    this.continents = [
      "America",
      "Europe",
      "Oceania",
      "Africa",
      "Asia"
    ];
    this.citiesTot = cities.map((elem,idx) => {
      return {
        city: elem.city,
        continent: elem.continent,
        temperature: elem.temperature,
        weather: elem.weather
      }
    });
    this.state = {
      cities: []
    };
  }
  // state = {
    // continents: [
      // "America",
      // "Europe",
      // "Oceania",
      // "Africa",
      // "Asia"
    // ]
  // }
  loadContinent(continent) {
    let newCities = this.citiesTot.map((elem) => {
      if (elem.continent === continent) {
        return elem;
      }
    })
    this.setState({
      ...
      this.state = {
        cities: newCities
      } 
    })
  }

  render() {
    let cardSend = this.state.cities.map((elem,idx) => {
      return (
        <div>
          <Cities key={idx} data={elem}  />
        </div>
        )
    })
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <button onClick={() => this.loadContinent("America")}>America</button>
            </li>
            <li>
              <button onClick={() => this.loadContinent("Europe")}>Europe</button>
            </li>
            <li>
              <button onClick={() => this.loadContinent("Oceania")}>Oceania</button>
            </li>
            <li>
              <button onClick={() => this.loadContinent("Africa")}>Africa</button>
            </li>
            <li>
              <button onClick={() => this.loadContinent("Asia")}>Asia</button>
            </li>
          </ul>
        </nav>
        <section>
          {cardSend}
        </section>
      </React.Fragment>
    )
  }
}

export default App;
