
        

        
        
 import React, {useState, useEffect} from "react";

const CityTemp = () => {

    const[data,setData] = useState([])



    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=5bc76d6e2424d82342e31e516f23d229`)
                    .then(res => res.json())
                    .then((city) => {
                        setData(city)
                        console.log(city)
                    })
            },[])


            return(
            <>
                    {data.map(city => (
                        <>
                            <h1 key={city.id}>{city.main.temp}</h1>
                        </>
                   
                ))}
            </>
            )
}
            export default CityTemp