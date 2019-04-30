import React from "react";
import "./App.css";
import cities from "./cities.json";
import Weather from "./Weather";
import chroma from "chroma-js";

class App extends React.Component {
  state = {
    continents: ["America", "Europe", "Oceania", "Africa", "Asia"],
    cities: cities
  };

  changeContinent(continent) {
    this.setState({
      ...this.state,
      cities: continent !== 'all' ? cities.filter(city => city.continent === continent) : cities
    });
  }

  calculateAvgTemperature() {
    return (
      (this.state.cities.reduce(
        (acum, curr) => (acum = acum + curr.temperature),
        0
      ) / this.state.cities.length).toFixed(2)
    );
  }

  calculateColor(temperature) {
    let scale = chroma
      .scale(["blue", "red"])
      .mode("rgb")
      .colors(this.state.cities.length);
    let cityIdx = [...this.state.cities]
      .sort((prev, curr) => prev.temperature - curr.temperature)
      .findIndex(el => el.temperature === temperature);

    return scale[cityIdx];
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul className="continent-selector">
            <li className="continent-selector-item" key="all">
              <button onClick={() => this.changeContinent('all')}>All</button>
            </li>
            {this.state.continents.map(continent => (
              <li className="continent-selector-item" key={continent}>
                <button onClick={() => this.changeContinent(continent)}>
                  {continent}
                </button>
              </li>
            ))}
          </ul>
          <h1>Average temperature: {this.calculateAvgTemperature()}º</h1>
        </nav>
        <section className="weather-container">
          {this.state.cities.map((city, idx) => (
            <Weather
              key={idx}
              cityData={city}
              color={this.calculateColor(city.temperature)}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
