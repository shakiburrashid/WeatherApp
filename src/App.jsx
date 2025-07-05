
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState(null);
  

const btnLocation = "Chittagong"
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=f71c3408c44a4cf8bbe101022250507&q=${btnLocation}&aqi=no`

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data)).catch((error) => console.log(error))
  }, [])


  const temp = data && data.current ? data.current.temp_c : " ";
  const seLocation = data && data.location ? data.location.name : " ";
  const time = data && data.location ? data.location.localtime : " ";

      

  return (
    <>
      <div>
        <div id={dark === true ? "dark" : " "} className="bg-amber-200 h-screen m-auto ">
          <div className="h-10"></div>
          <h1 className="text-4xl font-bold text-center flex justify-center mb-10 |PC SIZE| md:text-8xl md:font-semibold md:italic ">Today Weather</h1>
          <hr className='md:w-200 md:m-auto' />
          {/* Main */}
          <div
            className=" flex  flex-col gap-10 text-center h-73 w-80 |PC SIZE| md:flex md:flex-row md:gap-50 md:items-center m-auto md:h-120 md:w-280 md:justify-center"
          >
            <div className="right mt-2">
              <p className="text-6xl |PC SIZE| md:text-[10rem] md:font-semibold">{temp}°</p>
              <p className="text-2xl |PC SIZE| md:text-3xl ">{seLocation}</p>
              <p className="text-1xl |PC SIZE| md:text-2xl md:mt-2">{time}</p>
            </div>
            <div className="left |PC SIZE| md:flex md:flex-col md:gap-2">

              <input 
                className="p-2 block m-auto border-1  rounded-2xl w-65 text-center |PC SIZE| md:border-t-0 md:border-l-0 md:border-r-0 md:rounded-none md:outline-0 md:h-10 md:m-auto md:w-100 text-[#807C74]"
                type="text"
                placeholder="Search for a location"
              />
              <button 
                className="bg-[#dcdada] m-auto pl-1 mt-2 h-10 w-30 p-2 rounded-xl cursor-pointer text-black font-semibold items-center justify-center active:outline-2 hover:bg-[#ffffff] 
                |PC SIZE|  md:h-10 md:w-40 md:rounded-sm md:m-0 md:mt-3 "
              >
                Search
              </button>
            </div>
          </div>

          <button onClick={() => setDark((prev) => !prev)} id={dark === true ? 'btndarkstyle' : ''}
            className='m-auto text-xl h-10 w-30 bg-amber-400 flex justify-center  items-center rounded-md md active:outline-2 outline-red-600 cursor-pointer'> {dark === true ? <p>Light</p> : <p>Night</p>}</button>
        </div>
      </div>
    </>


  )

}

export default App
