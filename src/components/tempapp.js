
import React from 'react'
import './css/style.css';
import { useEffect, useState } from 'react';

const TempApp = () => {
    const [city, setCity] = useState('null')
    const[search,setSearch]= useState('Mumbai')
    
 useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5bc76d6e2424d82342e31e516f23d229`
            const res = await fetch(url);
            const response = await res.json()
            setCity(response)
            console.log(response)

        }
        fetchApi()
    },[search])
    
    return(
        <>
        <div className='container'>
           <div className='box'>
                <div className='input-Data'>
                    <input type='search' className='inputField'
                        placeholder='search' value={search}  onChange={(e)=> {setSearch(e.target.value)}} />
                </div>
            
                <div className='info'>
                   <h2 className='location'>
                        {search}
                    </h2>
                    <h1 className='temp'>
                    </h1>
                   <h3 className='tempmin_nax'>
                            Min: 10.5°C  | Max : 10.5°C
                   </h3>
                </div>
                <div className='wave'></div>
                <div className='wave-two'></div>
                <div className='wave-three'></div>
            </div>
        </div>
    </>
    )
}
export default TempApp