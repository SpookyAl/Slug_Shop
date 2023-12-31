import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/navbarlogo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        
        <p>SLUGSHOP</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
