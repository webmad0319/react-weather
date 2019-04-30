import React, { Component } from 'react'
import "../../weather-icons-master/css/weather-icons.css"
import "./City.css"


export default class city extends Component {
  render() {
  
    const Icons = { 
        "partly cloudy" : "wi wi-day-cloudy",
        "cloudy" : "wi wi-cloud",
        "mostly cloudy" : "wi wi-cloudy", 
        "storm" : "wi wi-rain",
        "fog" : "wi wi-fog",
        "sunny" : "wi wi-day-sunny",
        "Light Rain" : "wi wi-day-rain"
    }

    let iconMeteo = Icons[this.props.weather];
     

    return (
    <React.Fragment>
      <div className="cityWeather">
        <h2>{this.props.city}</h2>
        <i className={iconMeteo} />
        <p>{this.props.temperature} <i className="wi wi-celsius" /></p>
      </div>    
    </React.Fragment>
    )
  }
}


