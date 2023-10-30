import {useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {

  return (
  
      <div className="card">
                <div className="search">
                <input type="text" name="search" id="search" placeholder="enter city name" spellcheck="false" />
                <button><img src="/src/images/search.png" alt="search" /></button>
            </div>
            <div id="message"><div className="notFound">Hmmm, the city you entered was not found. Please try another city name.</div></div>
            <div className="weather">
                <img src="/src/images/rain.png" alt="Rain" className="weather-icon" />
                <h1 className="temp">22&deg;f</h1>
                <h2 className="city">Hudson</h2>
                <div className="details">
                    <div className="col">
                        <img src="/src/images/humidity.png" alt="humidity levels" />
                        <div>
                            <p className="humidity">55%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src="/src/images/wind.png" alt="wind" />
                        <div>
                            <p className="wind">15 km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default App
