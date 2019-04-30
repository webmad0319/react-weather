import React, { Component } from "react";
import "./Weather.css";

export default class Weather extends Component {
  render() {
    var cityData = this.props.cityData;
    let weatherIcons = {
      cloudy: "wi wi-cloudy",
      "mostly cloudy": "wi wi-cloudy",
      "partly cloudy": "wi wi-cloudy",
      "part cloudy": "wi wi-cloudy",
      storm: "wi wi-lightning",
      sunny: "wi wi-day-sunny",
      fog: "wi wi-fog",
      "light rain": "wi wi-showers"
    };

    let icon = weatherIcons[cityData.weather];

    return (
      <div className="weather" style={{backgroundColor: this.props.color}}>
        <p className="city-name">{cityData.city}</p>
        <p className="city-icon">
          <i className={icon}/>
        </p>
        <p className="city-temperature">{cityData.temperature}º</p>
      </div>
    );
  }
}
