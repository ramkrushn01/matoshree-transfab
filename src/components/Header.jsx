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
        <h3 className='color-voilet'>Mobile: <span className="color-red"><a href="tel:+918335949494">+91 8335949494</a></span></h3>
        <h3 className='sec-number color-red'> <a href="tel:+918600115570">+91 8600115570</a></h3> 
        <h3 className="color-green">Email: <span className="color-blue"><a href="mailto:matoshree.transfab@gmail.com">matoshree.transfab@gmail.com</a></span></h3>
      </div>
    </div>
  )
}
