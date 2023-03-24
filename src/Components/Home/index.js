import { useState, useContext} from "react"
import {useNavigate} from 'react-router-dom'

import {RotatingLines} from 'react-loader-spinner'

import WeatherContext from '../../context/weatherContext'

import './index.css'

function Home () {

    const [locationInput, changeLocationInput] = useState("")
    const [errorMsg, updateErrorMsg] = useState("")
    const [isLoading, changeLoadingStatus] = useState(false)

    const value = useContext(WeatherContext)
    const {getWeatherData} = value 

    const navigate = useNavigate()

    const onChangeLocation = event => { 
        changeLocationInput(event.target.value) 
        updateErrorMsg("")             
    }

    const makeApiCall = async (apiUrl) => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (response.ok === true){
            console.log(data)
            const updatedData = {
                temp: data.main.temp,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                name: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            }

            getWeatherData(updatedData)
            navigate("/weather-details")


        }
        else{
            changeLoadingStatus(false)
            updateErrorMsg(data.message)
        }
    }

    const getWeatherDataByLocationName = () => {
        changeLoadingStatus(true)
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=5b8edd238ae8252a95055cdccb69bb53&units=metric`
        
        makeApiCall(apiUrl)
    }

    const success = (position) => {
        const {coords} = position
        const {latitude, longitude} = coords
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5b8edd238ae8252a95055cdccb69bb53`
        makeApiCall(apiUrl)
        };
        
    const error = (error) => {
        changeLoadingStatus(false)
        updateErrorMsg(error.message)
        };

    const getWethearDataByCoordinates = async() => {
        changeLoadingStatus(true)
        const options = {
            enableHighAccuracy: true,
            }
        navigator.geolocation.getCurrentPosition(success, error, options)
    }

    const onSubmitLocation = (event) => {
        event.preventDefault()
        getWeatherDataByLocationName()
    }  
    
    const onClickGetDeviceLocation = () => {
        updateErrorMsg("")
        getWethearDataByCoordinates()
    }

    const renderLoader = () => (
        <div className="loader-container">
            <RotatingLines
                strokeColor="#bbe1f2"
                strokeWidth="5"
                animationDuration="1"
                width="50"
                visible={true}
            />
        </div>
    )

    

    return(
        <div className="home-bg-container">
            <div className="home-content">
                <h1 className="home-heading">Weather App</h1>
                <hr/>
                <form className="form-container" onSubmit={onSubmitLocation}>
                    <input type="text" value={locationInput} className="location-input" placeholder="Enter city name" onChange={onChangeLocation}/>
                    <div className="container">
                        <hr/>
                        <p className="text">or</p>
                        <hr/>
                    </div>
                    <button type="button" className="location-button" onClick={onClickGetDeviceLocation}>Get Device Location</button>
                    {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
                </form>   
            </div>
            {isLoading && renderLoader()}
        </div>
    )  
}

export default Home 