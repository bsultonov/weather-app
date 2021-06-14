import React from 'react'

import './HourlyWeatherTable.css';
import {unixToDate} from '../../adapters/unixToDate';

const HourlyWeatherTable = ({hourlyWeather}) => {
    return (
            <table className="hourlyWeatherTable__wrapper">
                <tbody>
                    {hourlyWeather.map(hour => (
                        <tr key={hour.dt}>
                            <td>{unixToDate(hour.dt).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</td>
                            <td>{parseInt(hour.temp - 273.15)}&deg;C</td>
                        </tr>
                    ))}     
                </tbody>      
            </table>
    )
}

export default HourlyWeatherTable
