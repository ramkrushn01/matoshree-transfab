import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar() {
  return (
    <div className="nav-main">
      <ul className="nav-leader">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us <FontAwesomeIcon icon="fa-light fa-angle-down" /> </li>
        <li className="nav-item">Products <FontAwesomeIcon icon="fa-light fa-angle-down" /> </li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Clients</li>
        <li className="nav-item">Gallery</li>
        <li className="nav-item">Contact Us & Enquiry</li>
        <li className="nav-item">Why Us?</li>
      </ul>
    </div>
  )
}
