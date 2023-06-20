import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';
import './Maps.css';

const Maps = () => {
  const [maps, setMaps] = useState([])

  const getMaps = async() => {
    try {
      const response = await axios.get("https://valorant-api.com/v1/maps")
      const data = response.data.data;
      setMaps(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMaps();
  }, [])

  console.log(maps)

  return (
    <div className='carousel_maps'>
      {maps.map((map) => (
          <div className='item_maps'>
            <div className='image_maps'>
              <img src={map.splash}></img>
            </div>
            <div className='info_maps'>
              <h1>{map.displayName}</h1>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Maps