import React from 'react'

const WeatherContext = React.createContext({
    weatherData: {},
    getWeatherData: () => {}
})

export default WeatherContext