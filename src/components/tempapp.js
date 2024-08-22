import React from "react";
import "./css/style.css";
import { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const [query, setQuery] = useState(" ");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5bc76d6e2424d82342e31e516f23d229`;
      // const URL3 = `https://api.openweathermap.org/data/2.5/weather?q=mumbai}&appid=5bc76d6e2424d82342e31e516f23d229&units=metric`;
      if (search) {
        try {
          const res = await fetch(url);
          const response = await res.json();
          if (response) {
            setCity(response.main);
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
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="input-Data">
            <input
              type="search"
              className="inputField"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Enter City"
            />
            <button onClick={handleSearch}>SEARCH</button>
          </div>
          {city ? (
            <div className="info">
              <h2 className="location">City:{query}</h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h1>{city.dt}</h1>
              <img
                src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt="Weather icon"
              />
              <h3 className="tempmin_max">
                {city.temp_min}°C | {city.temp_max}°C
              </h3>
            </div>
          ) : (
            <p>No data available</p>
          )}

          <div className="wave"></div>
          <div className="wave-two"></div>
          <div className="wave-three"></div>
        </div>
      </div>
    </>
  );
};
export default TempApp;
