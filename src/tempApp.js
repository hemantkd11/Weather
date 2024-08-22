// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Humidity from "./Humidity.js";
// const TempApp = () => {
//   const [city, setCity] = useState(null);
//   const [search, setSearch] = useState("Bengaluru");
//   const [query, setQuery] = useState(" ");
//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5bc76d6e2424d82342e31e516f23d229`;
//       if (search) {
//         try {
//           const res = await fetch(url);
//           const response = await res.json();
//           if (response) {
//             setCity(response);
//           } else {
//             setCity(null);
//           }
//         } catch (error) {
//           console.error("Error fetching the weather data: ", error);
//           setCity(null);
//         }
//       }
//     };
//     fetchApi();
//   }, [query]);
//   const handleSearch = () => {
//     setQuery(search);
//   };
//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
//     const options = {
//       weekday: "long",
//       hour: "2-digit",
//       minute: "2-digit",
//       // second: "2-digit",
//       // timeZoneName: "short",
//     };
//     const part = date.toLocaleDateString("en-US", options).split(" ");
//     return {
//       weekday: part[0],
//       time: part.slice(1),
//     };
//   };
//   const convertIntoNumber = (value) => {
//     return Number(value);
//   };
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
//     const options = { day: "2-digit", month: "2-digit" };
//     return date.toLocaleDateString("en-GB", options); // Format the date to DD/MM/YYYY
//   };
//   return (
//     <div className="flex flex-col w-full gap-3">
//       {/* part 1 input to seacrh your city */}
//       <div className="input-Data w-full flex flex-row gap-4 items-center justify-center">
//         <input
//           type="search"
//           className=" outline-none w-full text-sx p-2 bg- border-b-4 border-solid border-red-500 rounded"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//           placeholder="Enter City"
//         />
//         <button
//           className="bg-blue-700 w-40 p-2 text-white rounded text-body-text"
//           onClick={handleSearch}
//         >
//           SEARCH
//         </button>
//       </div>

//       {city && city.main ? (
//         <div className="flex flex-col w-full gap-2 items-center">
//           {/* day and time */}
//           <div className="w-full gap-2 flex  items-baseline text-body-text text-black">
//             <span className="text-white text-subheader font-semibold">
//               {formatDateTime(city.dt).weekday}{" "}
//             </span>
//             <span className="text-blue-800">{formatDate(city.dt)}</span>
//             <span>{formatDateTime(city.dt).time}</span>
//           </div>
//           <div className="w-full flex flex-row items-center justify-center">
//             <div className="flex w-3/5  ">
//               <div className="w-full flex flex-col items-center justify-center">
//                 <div className="text-body-text  text-white">
//                   <span className="text-black  font-normal">min </span>{" "}
//                   {city.main.temp_min}° |{" "}
//                   <span className="text-black font-normal">max </span>{" "}
//                   {city.main.temp_max}°
//                 </div>
//                 <div className="text-white text-temp">{city.main.temp}°</div>
//                 <div className="text-white">
//                   fells like {city.main.feels_like}°
//                 </div>
//               </div>
//             </div>
//             {/* weather icon */}
//             {city && city.weather ? (
//               <div className="flex w-2/5 flex-col  items-center justify-center ">
//                 <div className="w-full flex flex-col items-center justify-center">
//                   <div className="text-white">{city.weather[0].main}</div>
//                   <img
//                     className="w-full"
//                     src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
//                     alt="no image"
//                   />
//                 </div>
//               </div>
//             ) : (
//               <div>...loading</div>
//             )}
//           </div>

//           <div>hello</div>
//         </div>
//       ) : (
//         <p>No data available</p>
//       )}
//       <div className="wave opacity-30 absolute bg-white z-10 w-[50rem] h-[50rem] top-1/2 left-1/2 -ml-[25rem] -mt-[25rem] origin-[50%_48%] animate-drift rounded-[43%]"></div>
//       <div className="wave-two opacity-10 absolute z-30 w-[50rem] h-[50rem] top-1/2 left-1/2 -ml-[25rem] -mt-[25rem] origin-[50%_48%] animate-drift-slow rounded-[43%]"></div>
//       <div className="wave-three opacity-10 absolute z-20 w-[50rem] h-[50rem] top-1/2 left-1/2 -ml-[25rem] -mt-[25rem] origin-[50%_48%] animate-drift-slower rounded-[43%]"></div>
//     </div>
//   );
// };
// export default TempApp;

// {
//   /* <div className="w-2/5"></div> */
// }
// {
//   /* <div className="flex flex-col w-2/5 ">
//               <div className="w-full">
//                 <div>Wind</div>
//                 <div>Speed : {city.wind.speed} </div>
//               </div>
//               {/* <Humidity seriesdata={[convertIntoNumber(city.main.humidity)]} /> */
// }
// {
//   /* {console.log([convertIntoNumber(city.main.humidity)])}` */
// }
// {
//   /* </div> */
// }
import React, { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bengaluru");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5bc76d6e2424d82342e31e516f23d229`;
      if (search) {
        try {
          const res = await fetch(url);
          const response = await res.json();
          if (response) {
            setCity(response);
          } else {
            setCity(null);
          }
        } catch (error) {
          console.error("Error fetching the weather data: ", error);
          setCity(null);
        }
      }
    };
    fetchApi();
  }, [query]);

  const handleSearch = () => {
    setQuery(search);
  };

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    const part = date.toLocaleDateString("en-US", options).split(" ");
    return {
      weekday: part[0],
      time: part.slice(1),
    };
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { day: "2-digit", month: "2-digit" };
    return date.toLocaleDateString("en-GB", options);
  };
  const convertIntoNumber = (value) => {
    return Number(value);
  };

  const windSpeed = (speed) => {
    let ws = convertIntoNumber(speed) * 2.237;
    return ws.toFixed(2);
  };
  const visibility = (speed) => {
    let ws = convertIntoNumber(speed) / 1000;
    return ws.toFixed(2);
  };

  return (
    <div className="flex flex-col w-full gap-3 opacity-1 ">
      <div className="input-Data p-0 w-full bg-blue-700 flex flex-row items-center justify-center">
        <input
          type="search"
          className="z-40 outline-none w-full text-sx p-2 bg-white"
          value={search}
          style={{ borderRadius: "0px 0px 10px 0px" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Enter City"
        />
        <button
          className="z-40 bg-blue-700 w-40 p-2 text-white rounded text-body-text"
          onClick={handleSearch}
          style={{ borderRadius: "20px 0px 0px 0px" }}
        >
          SEARCH
        </button>
      </div>

      {city && city.main ? (
        <div className="flex flex-col w-full gap-2 items-center">
          <div className="w-full gap-2 flex items-baseline text-body-text text-black">
            <span className="text-white text-subheader font-semibold">
              {formatDateTime(city.dt).weekday}{" "}
            </span>
            <span className="text-blue-800">{formatDate(city.dt)}</span>
            <span>{formatDateTime(city.dt).time}</span>
          </div>
          <div className="w-full flex flex-row items-center justify-center">
            <div className="flex w-3/5">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="text-body-text text-white">
                  <span className="text-black font-normal">min </span>{" "}
                  {city.main.temp_min}° |{" "}
                  <span className="text-black font-normal">max </span>{" "}
                  {city.main.temp_max}°
                </div>
                <div className="text-white text-temp z-10">
                  {city.main.temp}°
                </div>
                <div className="text-white">
                  <span className="text-black font-medium z-10">
                    fells like
                  </span>{" "}
                  {city.main.feels_like}°
                </div>
              </div>
            </div>
            {city && city.weather ? (
              <div className="flex w-2/5 flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="text-white">{city.weather[0].main}</div>
                  <img
                    className="w-full z-10"
                    src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
                    alt="weather icon"
                  />
                </div>
              </div>
            ) : (
              <div>...loading</div>
            )}
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col z-10 shadow-gray-600 w-32 py-2 flex items-center justify-center bg-gradient-to-r from-purple-500 to-orange-500 rounded-[4px]">
              <span>Wind speed</span>
              <span className="text-white">
                {windSpeed(city.wind.speed)} mph
              </span>
            </div>
            <div className="flex flex-col  z-10 shadow-gray-600 w-32 py-2 flex items-center justify-center bg-gradient-to-r from-purple-500 to-orange-500 rounded-[4px]">
              <span>Visibility</span>
              <span className="text-white">
                {visibility(city.visibility)} km
              </span>
            </div>
            <div className="flex flex-col  z-10 shadow-gray-600 w-32 py-2 flex items-center justify-center bg-gradient-to-r from-purple-500 to-orange-500 rounded-[4px]">
              <span>Humidity</span>
              <span className="text-white">{city.main.humidity} %</span>
            </div>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}

      {/* Waves */}

      {/* <div className="wave-two opacity-10 absolute z-30 w-[50rem] h-[50rem] top-1/2 left-1/2 -ml-[25rem] -mt-[25rem] origin-[50%_48%] animate-drift-slow rounded-[43%]"></div>
      <div className="wave-three opacity-10 absolute z-20 w-[50rem] h-[50rem] top-1/2 left-1/2 -ml-[25rem] -mt-[25rem] origin-[50%_48%] animate-drift-slower rounded-[43%]"></div> */}
    </div>
  );
};

export default TempApp;
