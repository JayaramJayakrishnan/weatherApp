import { Component } from 'react';
import {Routes, Route} from 'react-router-dom'

import WeatherContext from './context/weatherContext'
import Home from './Components/Home/index'
import WeatherDetails from './Components/WeatherDetails/index'

import './App.css';

class App extends Component {
  state = {weatherData: {}}

  getWeatherData = (data) => {
    console.log(data)
    this.setState({weatherData: data})
  }

 render(){ 
  const {weatherData} = this.state

  return (
      <WeatherContext.Provider value={{weatherData, getWeatherData:this.getWeatherData}} >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/weather-details" element={<WeatherDetails />} />
        </Routes>
      </WeatherContext.Provider>
  )
}
}

export default App;
