import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-main">
      <ul className="nav-leader">
        <Link to="/" className="nav-item"><li>Home</li></Link>
        <li className="nav-item">About Us<IoIosArrowDown /> 
        <ul className="nav-sub-leader">
        <Link to="/company-profile/"><li className="nav-sub-leader-item">Company Profile</li></Link>
        <Link to="/company-profile/#vision-mission"><li className="nav-sub-leader-item">Vision & Mission</li></Link>
        <Link to="/company-profile/#quality-policy"><li className="nav-sub-leader-item">Quality Policy</li></Link>
        <Link to="/our-team/"><li className="nav-sub-leader-item">Our Team</li></Link>
        <Link to="/infrastructure-facilities/"><li className="nav-sub-leader-item">Infrastructure & Facilities</li></Link>
        </ul>
        </li>
        <li className="nav-item">Products<IoIosArrowDown />
        <ul className="nav-sub-leader">
          <Link to="/products/"><li className="nav-sub-leader-item">Power Transformer</li></Link>
          <Link to="/products/"><li className="nav-sub-leader-item">Distribution Transformer</li></Link>
        </ul>
        </li>
        <li className="nav-item"> Services <IoIosArrowDown />
        <ul className="nav-sub-leader">
        <Link to="/services/"><li className="nav-sub-leader-item">Repairing & Refurbishment</li></Link>
          {/* <li className="nav-sub-leader-item">Refurbishment</li> */}
        </ul>
        </li>
        <li className="nav-item"><Link to="/clients/">Clients</Link></li>
        <li className="nav-item">Gallery <IoIosArrowDown /> 
        <ul className="nav-sub-leader">
          <li className="nav-sub-leader-item">Photo's of Product Internal & Outer</li>
          <li className="nav-sub-leader-item">Photo's of Workshop</li>
          <li className="nav-sub-leader-item">Photo's of Testing Machine</li>
          <li className="nav-sub-leader-item">Photo's of Team</li>
          <li className="nav-sub-leader-item">Photo's of Office</li>
        </ul>
        </li>
        <li className="nav-item"><Link to="/contact-us">Contact Us & Enquiry</Link> 
          {/* <IoIosArrowDown />  */}
        </li>
        <li className="nav-item"><Link to="/why-us/">Why Us?</Link></li>
      </ul>
    </div>
  )
}
