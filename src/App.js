import React from 'react';
import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';

// api.openweathermap.org/data/2.5/weather?q={city name} 
const API_KEY = "26901649b35efc546dff0f82dde13fe6";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      error: false
    };
    this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  calCelcius(temp){
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=${API_KEY}`);
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celcius: this.calCelcius(response.main.temp),
      temp_max: this.calCelcius(response.main.temp_max),
      temp_min: this.calCelcius(response.main.temp_min),
      description: response.weather[0].description,
      icon: this.weatherIcon.Drizzle

    })
  }

  render(){
    return(
      <div className="App">
        <Weather city={this.state.city} 
        country={this.state.country} 
        temp_celcius={this.state.celcius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
