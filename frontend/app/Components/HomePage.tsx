import React, { useRef } from 'react'
import Hero from './Hero'
import Popular from './Popular'
import Offers from './Offers'
import NewCollections from './NewCollections'
import Navbar from './Navbar'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Hero/>
      <div>
        <NewCollections/>
      </div>
      <Offers/>
      <Popular/>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage