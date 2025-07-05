// import { useState, useEffect } from "react";
// // f71c3408c44a4cf8bbe101022250507 
// function WeatherApi() {
//   const [data, setData] = useState(null);
//   // const location = 'Dhaka';
//   useEffect(() => {
//     // fetch(`http://api.weatherapi.com/v1/current.json?key=f71c3408c44a4cf8bbe101022250507 &q=${location}&aqi=no`)
//     fetch(`https://api.escuelajs.co/api/v1/products`)
//     .then((response) => response.json())
//     .then ((data) => { setData(data) })
//     .catch((erro)=>console.log(erro))
//   },[]);

//   console.log(data)
//   console.log(data.id)
//     // const Temparature = data.location.current.temp_c;
//   // console.log(Temparature);


//   //  return (
//   //   <>
//   //   <h1>Data Recived</h1>
//   //   {data.map((d)=>(
//   //     <p>{d.location.country}</p>
//   //   ))}
//   //   </>
//   //  )

// }
// export default WeatherApi