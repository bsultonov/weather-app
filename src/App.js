import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import HourlyWeather from './pages/HourlyWeather/HourlyWeather';
import DailyWeather from './pages/DailyWeather/DailyWeather';
import { getWeatherData } from './data/weather';
import Loader from './components/Loader/Loader';
import NoData from './components/NoData/NoData';

function App() {

  const [location, setLocation] = useState({lat: "41.311081", lon: "69.240562"}); // Tashkent latitude and longtitude was set as a default
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  const getData = async () => {
    try {
        let response = await getWeatherData({lat: location.lat, lon: location.lon});
        let data = await response.json();

        setData({status: response.status, data});
        setLoading(false)
    } catch(error) {
      console.log(error.message);
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Hero">
      { loading ? 
          <div className="center">
            <Loader  />
          </div>
        :
          data.status === 200 ?
            <Router>
                <DailyWeather data={data.data} />
                <Route path="/:weekDay">
                  <HourlyWeather weatherData={data.data} />
                </Route>
                <Route path="/notFound">
                  <NoData />
                </Route>
            </Router>
          :
            <NoData message="Something went wrong..." />
      }
    </div>
  );
}

export default App;
