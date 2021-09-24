import { useEffect, useState } from 'react'
import { useLocation } from '../context/LocationContext'
import Header from './Header'
import axios from 'axios';

function Weather() {
    const [weather, setWeather] = useState({});
    const { location } = useLocation();

    const apiKey = `6d5f20313c39f8c5ba9f18e882e40101`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    useEffect(() => {
        axios(apiUrl)
        .then(response => setWeather(response.data))
        .catch(e => console.log(e))
    }, [apiUrl]);

    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };

    // const day = new Date();
    // const days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    

    return (
    <div className="App">
    <div className="container">
        {weather.main ? (
          <>
          <div className="app">
            <div className="header">
                <h1>Weather Forecast</h1>
                <Header/>
              </div>
              <div className="content">
                <div className="city">{location}</div>
                <div className="icon"><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
                <div className="temp"> {kelvinToFarenheit(weather.main.temp)}&deg;C</div>
                <div className="desc">{weather.weather[0].main}</div>
                <div className="min-max">{kelvinToFarenheit(weather.main.temp_min)}&deg;C / {kelvinToFarenheit(weather.main.temp_max)}&deg;C</div>
              </div>
          </div>
          
          {/* <fieldset className="border active">
            <legend><h2>{days[(day.getDay())%7]}</h2></legend>
            <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
            <h4 className="weather"><strong>Weather: {weather.weather[0].main}</strong></h4>
            <h3>Temp: {kelvinToFarenheit(weather.main.temp)}&deg;C</h3>
            <strong>{kelvinToFarenheit(weather.main.temp_min)}&deg;C</strong>
            <span> / </span>
            <strong>{kelvinToFarenheit(weather.main.temp_max)}&deg;C</strong>
          </fieldset> */}

          {/* <fieldset className="border">
            <legend><h2>{days[(day.getDay()+1)%7]}</h2></legend>
            <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
            <h4 className="weather"><strong>Weather: {weather.weather[0].main}</strong></h4>
            <h3>Temp: {kelvinToFarenheit(weather.main.temp)}&deg;C</h3>
            <strong>{kelvinToFarenheit(weather.main.temp_min)}&deg;C</strong>
            <span> / </span>
            <strong>{kelvinToFarenheit(weather.main.temp_max)}&deg;C</strong>
          </fieldset>

          <fieldset className="border">
            <legend><h2>{days[(day.getDay()+2)%7]}</h2></legend>
            <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
            <h4 className="weather"><strong>Weather: {weather.weather[0].main}</strong></h4>
            <h3>Temp: {kelvinToFarenheit(weather.main.temp)}&deg;C</h3>
            <strong>{kelvinToFarenheit(weather.main.temp_min)}&deg;C</strong>
            <span> / </span>
            <strong>{kelvinToFarenheit(weather.main.temp_max)}&deg;C</strong>
          </fieldset>

          <fieldset className="border">
            <legend><h2>{days[(day.getDay()+3)%7]}</h2></legend>
            <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
            <h4 className="weather"><strong>Weather: {weather.weather[0].main}</strong></h4>
            <h3>Temp: {kelvinToFarenheit(weather.main.temp)}&deg;C</h3>
            <strong>{kelvinToFarenheit(weather.main.temp_min)}&deg;C</strong>
            <span> / </span>
            <strong>{kelvinToFarenheit(weather.main.temp_max)}&deg;C</strong>
          </fieldset>

          <fieldset className="border">
            <legend><h2>{days[(day.getDay()+4)%7]}</h2></legend>
            <div><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></div>
            <h4 className="weather"><strong>Weather: {weather.weather[0].main}</strong></h4>
            <h3>Temp: {kelvinToFarenheit(weather.main.temp)}&deg;C</h3>
            <strong>{kelvinToFarenheit(weather.main.temp_min)}&deg;C</strong>
            <span> / </span>
            <strong>{kelvinToFarenheit(weather.main.temp_max)}&deg;C</strong>
          </fieldset> */}
        </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
    )
}

export default Weather