import React from 'react'
import './Navbar.css'
import {FaCoins} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
        <div className='navabr' >
            <FaCoins className='icon'/>
            <h1> Crypto <span className='purple'>Show</span></h1>
        </div>
    </div>
  )
}

export default Navbar
