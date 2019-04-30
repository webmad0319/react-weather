import React, { Component } from 'react';
import './City.css';

export default class City extends Component {

  transformWeatherIcon(weather){
    switch(weather){
      case 'sunny':
      return 
      default:
      return 'Hola';
    }
  }

  render() {
    return (
      <div className="City">
        <span className="City-name">{this.props.city}</span>
        <span className="City-weather"><i className="wi wi-night-sleet"></i></span>
        <span className="City-temperature">{this.props.temperature}</span>
      </div>
    )
  }
}
