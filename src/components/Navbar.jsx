import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>Valorant App</h2>
        <ul>
            <li>
                <Link to={'/'}>Agents</Link>
            </li>
            <li>
                <Link to={'/maps'}>Maps</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar