import React, { Component } from 'react'
import "./City.css"

export default class City extends Component {
  render() {
    let city = this.props
    let weath = city.weather.toLowerCase().split(" ").join("-")
    return (
      <div className="cityContainer">
        <li>{city.city}</li>
        <i style={{ color: this.props.color }}className={`wi wi-day-${weath}`}></i>        
        <li>{city.temperature}</li>
      </div>
    )
  }
}
