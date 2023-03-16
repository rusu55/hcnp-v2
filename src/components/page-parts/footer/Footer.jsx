import React from 'react'
import {FaRegMap, FaRegEnvelope, FaPhoneAlt, FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare, FaInstagramSquare, FaRssSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
    <div className="container">
        <div className="row">
            <div className="col-6 footer__items">
              <h3>HCNP </h3> 
              <span>Home Care Nursing</span>               
              <p>Our company values are derived from years of experience in the home health industry and through identification of areas that will improve our clients’ well being.</p>
            </div>
            <div className="col-3 flex footer__links">
                <h3>Navigaiton</h3>
                <ul className='mt-1'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About US</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="col-3 flex footer__services">
                <h3>Services</h3>
                <ul className='mt-1'>
                  <li><a href="#">Post Surgical Assistance</a></li>
                  <li><a href="#">Spinal Cord And Traumatic Brain Injuries</a></li>
                  <li><a href="#">Ventilator Dependence Assistance</a></li>
                  <li><a href="#">Wheelchair Assistance</a></li>                 
                </ul>
             </div>
        </div>
    </div>          
            <div className="footer__contact mt-5">
                <div className="container">
                    <div className="row">
                        <div className="item flex">
                            <FaRegMap size={40} className='icon' />
                            <p className='ml-1'>2625 Central St., Evanston, IL, 60201</p>
                        </div>
                        <div className="item flex">
                          <FaRegEnvelope size={40} className='icon' />
                          <p className='ml-1'>info@hcnpprofessionals.com</p>
                        </div>
                        <div className="item flex">
                          <FaPhoneAlt size={30} className='icon' />
                          <p className='ml-1'>847-881-5548</p>
                        </div>
                    </div>
                </div>
            </div>          
        <div className="row">
            <div className="col-12 footer__bottom">
               <p>Copyright HCNP Home Care Nursing</p>
            </div>
        </div>
    
  </footer>
  )
}

export default Footer