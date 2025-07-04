
import './App.css'

function App() {

  return (
    <>
      <div>
        <div className="bg-amber-200 h-screen m-auto">
          <div className="h-10"></div>
          <h1 className="text-4xl font-bold text-black text-center flex justify-center mb-10 |PC SIZE| md:text-8xl md:font-semibold md:italic ">Today Weather</h1>
          {/* Main */}
          <div
            className=" flex  flex-col gap-10 text-center h-73 w-80 |PC SIZE| md:flex md:flex-row md:gap-30 md:items-center m-auto md:h-120 md:w-280 md:justify-center"
          >
            <div className="right mt-2">
              <p className="text-6xl |PC SIZE| md:text-[10rem] md:font-semibold">25°</p>
              <p className="text-2xl |PC SIZE| md:text-3xl ">Chittagong</p>
              <p className="text-1xl |PC SIZE| md:text-2xl md:mt-2">12.45 am - Friday 04 July 2025</p>
            </div>
            <div className="left |PC SIZE| md:flex md:gap-2 md:items-center md:justify-center">

              <input
                className="p-2 block m-auto border-1 rounded-2xl w-65 text-center |PC SIZE| md:h-10 md:m-auto md:w-80"
                type="text"
                placeholder="Search for a location"
              />
              <button
                className="bg-[#dcdada] m-auto pl-1 mt-2 h-10 w-30 p-2 rounded-xl cursor-pointer text-black font-semibold items-center justify-center active:outline-2 hover:bg-[#ffffff] 
          |PC SIZE|  md:h-10 md:m-auto "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
