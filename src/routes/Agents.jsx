import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';
import './Agents.css';

const Agents = () => {
  const [agents, setAgents] = useState([]);

  const getAgents = async() => {
    try {
      const response = await axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      const data = response.data.data;
      setAgents(data)

    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
      getAgents();
  },[])

  return (
    <div>
      <div className='carousel_agents'>
        {agents.map((agent) => (
          <div className='item_agents'>
            <div className='image_agents'>
              <img src={agent.displayIcon}></img>
            </div>
            <div className='info_agents'>
              <h1>{agent.displayName}</h1>
              <p>{agent.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Agents