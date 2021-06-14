import React from 'react'

import './HourlyWeatherTable.css';
import {unixToDate} from '../../adapters/unixToDate';

const HourlyWeatherTable = ({hourlyWeather}) => {
    return (
            <table className="hourlyWeatherTable__wrapper">
                <thead>
                    <tr>
                        <td>Time</td>
                        <td>Temperature</td>
                        <td>Condition</td>
                    </tr>
                </thead>
                <tbody>
                    {hourlyWeather.map(hour => (
                        <tr key={hour.dt}>
                            <td>{unixToDate(hour.dt).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</td>
                            <td>{parseInt(hour.temp - 273.15)}&deg;C</td>
                            <td>{hour.weather[0].main}</td>
                            <td><img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} alt={hour.weather[0].main} /></td>
                        </tr>
                    ))}     
                </tbody>      
            </table>
    )
}

export default HourlyWeatherTable
