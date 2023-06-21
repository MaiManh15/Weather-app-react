import './App.css';
import { useState } from "react";
import Search from './Component/search/search';
import CurrWeather from './Component/Weather/CurrWeather';
import Forecast from './Component/Forecast/Forecast';
import { WeatherApiUrl, WeatherApiKey } from './API';
import { useMemo } from 'react';

function App() {

  const [CurrentWeather, setCurrWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const SearchChangeHandle = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    // const CurrWeatherFetch = fetch(`${WeatherApiUrl}/weather?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric&`);
    // const ForecastFetch = fetch(`${WeatherApiUrl}/forecast?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric`);

    const CurrWeatherFetch = fetch(`${WeatherApiUrl}/weather?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric&lang=vi`);
    const ForecastFetch = fetch(`${WeatherApiUrl}/forecast?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric&lang=vi`);

    Promise.all([CurrWeatherFetch, ForecastFetch])
      .then(async (res) => {
        const WeatherRes = await res[0].json();
        const ForecastRes = await res[1].json();

        setCurrWeather({ city: searchData.label, ...WeatherRes })
        setForecast({ city: searchData.label, ...ForecastRes })
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="wrapper">
      <Search
        OnSearchChange={SearchChangeHandle}
      />
      {CurrentWeather && <CurrWeather data={CurrentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
