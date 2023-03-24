# Weather App

In this Assignmment, we build a weather app that can fetch and display weather data based on location name or location of the user.

<br/>

## Set Up Instructions
  - Clone the git repository to your local machine by running:  *git clone "repository url"*
  - From your local repository
    - Download dependencies by running:   *npm install*
    - Start up the app using:   *npm start*

<br/>

## Functionality 
- **Home Route**

  - Route contains a form where users can enter their      location manually. When the enterd location name is 
    - valid, user will be directed to the weather-details Route.
    - Invalid, an error message will be shown.

  - Route contains **Get Device Location** button. On click, 
    - if the user provides location access, ser will be directed to the weather-details Route.
    - otherwise an error message will be shown.


- **Weather Details Route**
  
  - Route displays the weather details fetched using Openweathermap API.
  - Route contains an arrow button to navigate the user back to home page.



<br/>

## API Reference

#### Get Weather data based on City name

```http
  GET https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` |City name| 
| `appId`| `string`| API Key|

#### Get Weather data based on Coordinates

```http
  GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `lat` | `string` | Latitude |
| `lon` | `string` | Longitude|
| `appId`| `string`| API Key




<br/>

## Colors 

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ecf9fb; width: 150px; padding: 10px; color: black">Hex: #ecf9fb</div>
<div style="background-color: #f2f2ea; width: 150px; padding: 10px; color: black">Hex: #f2f2ea</div>
<div style="background-color: #d2d5d9; width: 150px; padding: 10px; color: black">Hex: #d2d5d9</div>
<div style="background-color: #a1a3a5; width: 150px; padding: 10px; color: white">Hex: #a1a3a5</div>
<div style="background-color: #555657; width: 150px; padding: 10px; color: white">Hex: #555657</div>
<div style="background-color: #acaeb0; width: 150px; padding: 10px; color: black">Hex: #acaeb0</div>
<div style="background-color: #05b0fa; width: 150px; padding: 10px; color: white">Hex: #05b0fa</div>
<div style="background-color: #048dc7; width: 150px; padding: 10px; color: white">Hex: #048dc7</div>
<div style="background-color: #06a9ef; width: 150px; padding: 10px; color: white">Hex: #06a9ef</div>
<div style="background-color: #89d3f6; width: 150px; padding: 10px; color: black">Hex: #89d3f6</div>
<div style="background-color: #f72626; width: 150px; padding: 10px; color: white">Hex: #f72626</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>