import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import GetDataWeather from './GetDataWeather'
// import WeatherApi from './WeatherApi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <WeatherApi/> */}
    {/* <GetDataWeather/> */}
  </StrictMode>,
)
