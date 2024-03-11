import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Card } from './Card'

function App() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState("15")
  const [windy, setWindy] = useState("12")
  const [cloud, setCloud] = useState("30")
  const [maxtemp, setMaxtemp] = useState("18")
  const [mintemp, setMintemp] = useState("20")
  const [humadity, setHumidity] = useState("23")

  const handleClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6adc3dbf5886ffab96c07b8f2d5b735f&units=metric`)
      .then(res => {
        setTemp(res.data.main.temp)
        setWeather(res.data)
        setCloud(res.data.clouds.all)
        setMaxtemp(res.data.main.temp_max)
        setMintemp(res.data.main.temp_min)
        setHumidity(res.data.main.humidity)
        setWindy(res.data.wind.speed)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const handleInputChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <>
      <div className='headerdiv'>
        <img className='WW' src="WW.svg" alt="" />
        <form onSubmit={(e) => {
          e.preventDefault()
          handleClick();
        }}>
          <div className='inputdiv'>
            <input maxLength={15} type="text" placeholder='Search location' value={city} onChange={handleInputChange} />
            <img className='srchicon' onClick={handleClick} src="searchicon.svg" />
          </div>
        </form>
      </div>
      <div className='headermaindiv'>
        <p className='celsius'>{temp}°</p>
        <p className='country'>{city}</p>
        <img className='imgclody' src="cloudy.svg" />
      </div>
      <Card maxtemp={maxtemp} mintemp={mintemp} cloudy={cloud} humadity={humadity} windy={windy} />
    </>
  )
}

export default App
