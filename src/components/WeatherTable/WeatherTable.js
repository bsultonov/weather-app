import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import './WeatherTable.css';

import Sunny from './assets/sun.png';
import Cloudy from './assets/cloudy.png';
import Rainy from './assets/rainy.png';
import Snowy from './assets/snowy.png';

const WeatherTable = () => {
    return(
        <div className="WeatherTable">
            <WeatherCard image={Sunny} weekDay="Wed" dayDegree="70°" nightDegree="60°" />
            <WeatherCard image={Sunny} weekDay="Thu" dayDegree="71°" nightDegree="60°" />
            <WeatherCard image={Cloudy} weekDay="Fri" dayDegree="40°" nightDegree="60°" />
            <WeatherCard image={Rainy} weekDay="Sat" dayDegree="38°" nightDegree="60°" />
            <WeatherCard image={Rainy} weekDay="Sun" dayDegree="35°" nightDegree="60°" />
            <WeatherCard image={Snowy} weekDay="Mon" dayDegree="20°" nightDegree="60°" />
            <WeatherCard image={Snowy} weekDay="Tue" dayDegree="15°" nightDegree="60°" />
            <WeatherCard image={Snowy} weekDay="Wed" dayDegree="13°" nightDegree="60°" />
        </div>
    );
}

export default WeatherTable;