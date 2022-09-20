import React from 'react'
import './Navbar.css'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navabr' >
            <FaCoins className='icon'/>
            <h1> Crypto <span className='purple'>Details</span></h1>
        </div>
    </Link>
  )
}

export default Navbar
