import React from 'react';
import '../css/Header.css';

export default function Header() {
  return (
    <div className="main-header">
        <div className="main-logo">
            <img src="/matoshree-transfab-logo-removebg-preview.png" alt="matoshree transfab logo" />
        </div>
      <div className="contact-info">
        <h3>Contact Us:</h3>
        <h3 className='color-voilet'>Mobile: <span className="color-red">+91 9335949494 </span></h3>
        <h3 className='sec-number color-red'> +91 8600115570</h3> 
        <h3 className="color-green">Email: <span className="color-blue">matoshree.transfab@gmail.com</span></h3>
      </div>
    </div>
  )
}
