import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { unixToDate } from '../../adapters/unixToDate';
import NoData from '../../components/NoData/NoData';
import HourlyWeatherTable from '../../components/HourlyWeatherTable/HourlyWeatherTable';

const HourlyWeather = ({weatherData}) => {

    let { weekDay } = useParams();

    const [hourlyWeather, setHourlyWeather] = useState([]);
    const [selectedDate, setSelectedDate] = useState();
    const [validWeekDay, setValidWeekDay] = useState(false);

    const getHourlyWeather = (date) => {
        var t = unixToDate(date);
        setSelectedDate(t)

        var hourly = weatherData.hourly.filter(hour => {
          var t2 = unixToDate(hour.dt);
          
          return t2.getDate() === t.getDate()
        })

        setHourlyWeather(hourly);
      }

    const getWeatherByWeekDay = (weekDay) => {
        var dailyWeatherDate = weatherData.daily.find(el => {
        var t = unixToDate(el.dt);
        return t.toLocaleString("en-US", {weekday: 'short'}).toLowerCase() === weekDay.toLowerCase();
        })

        getHourlyWeather(dailyWeatherDate.dt)
      }

    useEffect(() => {
        var weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        if(weekDays.includes(weekDay.toLowerCase())) {
            setValidWeekDay(true);
            getWeatherByWeekDay(weekDay);
        }
    }, [weekDay])

    return (
        <div className="Wrapper">
            <h2>{selectedDate && selectedDate.toLocaleString("en-US", {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})}</h2>
            {hourlyWeather.length ?
                <HourlyWeatherTable hourlyWeather={hourlyWeather} />   
            :
                <NoData message={validWeekDay ? "Hourly weather data is not available" : "Please, enter valid week day!"} />
            }
        </div>
    )
}

export default HourlyWeather
