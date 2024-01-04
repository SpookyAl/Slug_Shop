import React from 'react'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="hero-left">
        <h2>EXPLORE SLUGSHOP DEALS</h2>
        <div>
            <p>UCSC's</p>
            <p>Premium</p>
            <p>Online Market Place</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Listings</div>
            <img src="./images/arrow.png" alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src="./images/sammy1.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero