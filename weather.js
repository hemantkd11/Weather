// const GetcordinateByCityName = async (cityName) => {
//   const CityURL = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json`;
//   const response = await fetch(CityURL);
//   const data = await response.json();
//   if (data.length > 0) {
//     return { lat: data[0].lat, lon: data[0].lon };
//   } else {
//     return "No Data Found With This Name";
//   }
// };

// const GetWeatherForcast = async (lat, lon) => {
//   const WeatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
//   const response = await fetch(WeatherURL);
//   const data = await response.json();
//   return data;
// };
// const getWeatherIcon = (weatherCode) => {
//   // Example mapping of weather codes to icons
//   const weatherIcons = {
//     0: "☀️", // Clear sky
//     1: "🌤", // Mainly clear
//     2: "⛅", // Partly cloudy
//     3: "☁️", // Overcast
//     45: "🌫️", // Fog
//     48: "🌫️", // Depositing rime fog
//     51: "🌧️", // Drizzle: Light intensity
//     53: "🌧️", // Drizzle: Moderate intensity
//     55: "🌧️", // Drizzle: Dense intensity
//     61: "🌧️", // Rain: Slight intensity
//     63: "🌧️", // Rain: Moderate intensity
//     65: "🌧️", // Rain: Heavy intensity
//     80: "🌦", // Rain showers: Slight
//     81: "🌦", // Rain showers: Moderate
//     82: "🌦", // Rain showers: Violent
//     95: "⛈", // Thunderstorm: Slight or moderate
//     99: "⛈", // Thunderstorm: Heavy hail
//     // Add more mappings as needed
//   };
//   return weatherIcons[weatherCode] || "❓"; // Default icon if code not found
// };
// const formatISO8601 = (isoString, utcOffsetSeconds) => {
//   //   console.log(`isoString: ${isoString}, utcOffsetSeconds: ${utcOffsetSeconds}`);
//   const date = new Date(isoString); // Parse ISO 8601 string to Date object
//   if (isNaN(date.getTime())) {
//     return "Invalid Date"; // Handle invalid date
//   }
//   const offsetDate = new Date(date.getTime() + utcOffsetSeconds * 1000); // Adjust for UTC offset in milliseconds
//   const options = {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: false, // Ensure 24-hour format
//   };
//   return offsetDate.toLocaleString("en-US", options); // Format date and time
// };
// const CityWeather = async (cityName) => {
//   const cordinate = await GetcordinateByCityName(cityName);
//   if (cordinate && cordinate !== "No Data Found With This Name") {
//     const forecast = await GetWeatherForcast(cordinate.lat, cordinate.lon);
//     if (forecast && forecast.hourly) {
//       const { temperature_2m, time } = forecast.hourly;
//       // UTC offset from API response
//       const utcOffsetSeconds = forecast.utc_offset_seconds;
//       // Get the current hour in the forecast data
//       const currentTime = new Date();
//       const currentHour = currentTime.getUTCHours();

//       // Find the index of the current hour in the time array
//       const currentHourIndex = time.findIndex((t) => {
//         const forecastDate = new Date(t);
//         return forecastDate.getUTCHours() === currentHour;
//       });
//       let minTemp = temperature_2m[0];
//       let maxTemp = temperature_2m[0];
//       for (let i = 1; i <= 24; i++) {
//         let formin = temperature_2m[i];
//         let formax = temperature_2m[i];
//         if (formin < minTemp) {
//           minTemp = formin;
//         }
//         if (formax > maxTemp) {
//           maxTemp = formax;
//         }
//       }
//       console.log("min temp", minTemp, "max temp", maxTemp);
//       //   const time = forecast.hourly_units.time;
//       for (let i = currentHourIndex; i < currentHourIndex + 6; i++) {
//         const formattedTime = formatISO8601(time[i], utcOffsetSeconds);
//         const temp = temperature_2m[i];
//         return formattedTime, temp;
//         // console.log(`Time: ${formattedTime}, Temperature: ${temp}°C`);
//       }
//       console.log(`Time: ${formattedTime}, Temperature: ${temp}°C`);
//     } else {
//       console.log("Weather data not available");
//     }
//   } else {
//     // console.log("city not found");
//   }
// };
// CityWeather("mumbai");
