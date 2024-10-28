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
          <li className="nav-sub-leader-item">Vision & Mission</li>
          <li className="nav-sub-leader-item">Quality Policy</li>
          <li className="nav-sub-leader-item">Our Team</li>
          <li className="nav-sub-leader-item">Infrastructure & Facilities</li>
        </ul>
        </li>
        <li className="nav-item">Products </li>
        <li className="nav-item">Services <IoIosArrowDown />
        <ul className="nav-sub-leader">
          <li className="nav-sub-leader-item">Repairing</li>
          <li className="nav-sub-leader-item">Refurbishment</li>
        </ul>
        </li>
        <li className="nav-item">Clients</li>
        <li className="nav-item">Gallery <IoIosArrowDown /> 
        <ul className="nav-sub-leader">
          <li className="nav-sub-leader-item">Photo's of Product Internal & Outer</li>
          <li className="nav-sub-leader-item">Photo's of Workshop</li>
          <li className="nav-sub-leader-item">Photo's of Testing Machine</li>
          <li className="nav-sub-leader-item">Photo's of Team</li>
          <li className="nav-sub-leader-item">Photo's of Office</li>
        </ul>
        </li>
        <li className="nav-item">Contact Us & Enquiry 
          {/* <IoIosArrowDown />  */}
        </li>
        <li className="nav-item">Why Us?</li>
      </ul>
    </div>
  )
}
