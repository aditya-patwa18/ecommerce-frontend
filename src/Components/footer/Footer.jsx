import React from 'react'
import './Footer.css'
import footer_img from '../Assets/logo_big.png'
import insta_pic from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_img} alt="" />
        <p>SHOPIFY</p>
      </div>
      <ul className='Footer-li'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
            <img src={insta_pic} alt="" />
        </div>
         <div className="footer-icon-container">
            <img src={pintrest_icon} alt="" />
        </div>
         <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025</p>
      </div>
    </div>
  )
}

export default Footer
