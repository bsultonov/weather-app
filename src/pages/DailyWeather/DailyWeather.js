import React from 'react';
import { useHistory } from 'react-router-dom';

import './DailyWeather.css';
import { unixToDate } from '../../adapters/unixToDate';
import DailyWeatherCard from '../../components/DailyWeatherCard/DailyWeatherCard';


const getDayName = (date) => {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var t = unixToDate(date);
  var dayName = days[t.getDay()];

  return dayName;
}

const DailyWeather = ({data}) => {

    let history = useHistory();

    const getHourlyWeather = (date) => {
      history.push(`/${getDayName(date)}`)
    }
      
    return(
        <div className="Wrapper">
        <div className="WeatherTable">
            {data.daily.slice(0, data.daily.length - 1).map(day => (
                <DailyWeatherCard key={day.dt} image={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} altText={day.weather[0].main} weekDay={getDayName(day.dt)} maxTemp={parseInt(day.temp.max - 273.15)} minTemp={parseInt(day.temp.min - 273.15)} onCardClick={() => getHourlyWeather(day.dt)} />
            ))}
        </div>
        </div>
    );
}

export default DailyWeather;