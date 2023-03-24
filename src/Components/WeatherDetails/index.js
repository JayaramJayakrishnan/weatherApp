import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'
import {IoLocationOutline} from 'react-icons/io5'
import {CiTempHigh} from 'react-icons/ci'
import {BsDropletHalf} from 'react-icons/bs'

import WeatherContext from '../../context/weatherContext'

import './index.css'

function WeatherDetails() {

    const value = useContext(WeatherContext)
    const {weatherData} = value

    const {icon, temp, feelsLike, humidity, name, country, description} = weatherData
    const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`

    const navigate = useNavigate()

    const onClickArrowButton = () => {
        navigate("/")
    }
   
    return(
        <div className='weather-bg-container'>
            <div className="weather-content">
                <div className="weather-header">
                    <button type="button" className='arrow-button' onClick={onClickArrowButton}>
                        <FiArrowLeft className='arrow-icon' />
                    </button>
                    <h1 className='weather-heading'>Weather App</h1>
                </div>
                <hr/>
                <div className="icon-container">
                    <img src={iconUrl} alt="weather-icon" className='weather-icon'/>   
                </div>
                <div className='main-details'>
                    <h1 className='temp'>{temp} <sup className='sup-main-temp'>o</sup>C</h1>
                    <p className='description'>{description}</p>
                    <div className='location-container'>
                        <IoLocationOutline className='location-icon'/>
                    <   p className='location'>  {name}, {country}</p>
                    </div>
                </div>
                <hr/>
                <div className='feel-humdity-container'>
                    <div className='feel-box'>
                        <CiTempHigh className='temp-icon'/>
                        <div className='feels-like'>
                            <p className='label-text bold'>{feelsLike} <sup className='sup-feel-temp'>o</sup>C</p>
                            <p className='label-text'>Feels like</p>
                        </div>
                    </div>
                    <div className='humidity-box'>
                        <BsDropletHalf className='humidity-icon'/>
                        <div className='humidity'>
                            <p className='label-text bold'>{humidity}%</p>
                            <p className='label-text'>Humidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
     
}
export default WeatherDetails