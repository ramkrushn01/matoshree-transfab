import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="nav-main">
      <ul className="nav-leader">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us <IoIosArrowDown /> 
        <ul className="nav-sub-leader">
          <li className="nav-sub-leader-item">Company Profile</li>
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
