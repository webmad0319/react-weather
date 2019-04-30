import React, { Component } from 'react';
import './City.css';
import { WiDaySunny, WiDayFog, WiDayThunderstorm, WiDaySunnyOvercast, WiDayCloudy, WiCloud, WiDayLightning } from "weather-icons-react";

export default class City extends Component {

  transformWeatherIcon(weather){
    switch(weather){
      case 'sunny':
      return <WiDaySunny size={48} color='hsl(90, 60%, 40%)' />
      case 'cloudy':
      return <WiCloud size={48} color='hsl(90, 60%, 40%)' />
      case 'mostly cloudy':
      return <WiDayCloudy size={48} color='hsl(90, 60%, 40%)' />
      case 'partly cloudy':
      return <WiDaySunnyOvercast size={48} color='hsl(90, 60%, 40%)' />
      case 'part cloudy':
      return <WiDaySunnyOvercast size={48} color='hsl(90, 60%, 40%)' />
      case 'storm':
      return <WiDayThunderstorm size={48} color='hsl(90, 60%, 40%)' />
      case 'fog':
      return <WiDayFog size={48} color='hsl(90, 60%, 40%)' />
      case 'Light Rain':
      return <WiDayLightning size={48} color='hsl(90, 60%, 40%)' />
      default:
      return 'Not available';
    }
  }

  render() {
    return (
      <div className="City">
        <span className="City-name">{this.props.city}</span>
        <span className="City-weather">{this.transformWeatherIcon(this.props.weather)}</span>
        <span className="City-temperature">{this.props.temperature}</span>
      </div>
    )
  }
}
