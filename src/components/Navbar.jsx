import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { WiSnow } from 'react-icons/wi';

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(true);

  const handleHamburger = () => {
      setNavState(!navState);
  };

  const closeHamburger = () => {
    setNavState(false);
  }

  useEffect(() => {
    
    const handleResize = ()=>{
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(()=>{
    if(screenWidth <= 760){
      setIsTabletOrMobile(false);
    }
    else{
      setIsTabletOrMobile(true);
    }
  },[screenWidth])
  
  

  return (
    <div className="nav-main">
      <div className="hamburger show-in-tablet-mobile" onClick={handleHamburger}>
        {
          navState ?
          <RxCross2 size={"1em"} />
          :
          <GiHamburgerMenu size={"1em"} />
        } 
        </div>

        {
          (navState || isTabletOrMobile) &&
          <ul className="nav-leader">
            <Link onClick={closeHamburger} to="/" className="nav-item"><li>Home</li></Link>
            <li className="nav-item">About Us<IoIosArrowDown /> 
            <ul className="nav-sub-leader">
            <Link onClick={closeHamburger}to="/company-profile/"><li className="nav-sub-leader-item">Company Profile</li></Link>
            <Link onClick={closeHamburger}to="/company-profile/#vision-mission"><li className="nav-sub-leader-item">Vision & Mission</li></Link>
            <Link onClick={closeHamburger}to="/company-profile/#quality-policy"><li className="nav-sub-leader-item">Quality Policy</li></Link>
            <Link onClick={closeHamburger}to="/our-team/"><li className="nav-sub-leader-item">Our Team</li></Link>
            <Link onClick={closeHamburger}to="/infrastructure-facilities/"><li className="nav-sub-leader-item">Infrastructure & Facilities</li></Link>
            </ul>
            </li>
            <li className="nav-item">Products<IoIosArrowDown />
            <ul className="nav-sub-leader">
              <Link onClick={closeHamburger}to="/products/"><li className="nav-sub-leader-item">Power Transformer</li></Link>
              <Link onClick={closeHamburger}to="/products/"><li className="nav-sub-leader-item">Distribution Transformer</li></Link>
            </ul>
            </li>
            <li className="nav-item"> Services <IoIosArrowDown />
            <ul className="nav-sub-leader">
            <Link onClick={closeHamburger}to="/services/"><li className="nav-sub-leader-item">Repairing & Refurbishment</li></Link>
              {/* <li className="nav-sub-leader-item">Refurbishment</li> */}
            </ul>
            </li>
            <li className="nav-item"><Link onClick={closeHamburger}to="/clients/">Clients</Link></li>
            <li className="nav-item">Gallery <IoIosArrowDown /> 
            <ul className="nav-sub-leader">
              <li className="nav-sub-leader-item">Photo's of Product Internal & Outer</li>
              <li className="nav-sub-leader-item">Photo's of Workshop</li>
              <li className="nav-sub-leader-item">Photo's of Testing Machine</li>
              <li className="nav-sub-leader-item">Photo's of Team</li>
              <li className="nav-sub-leader-item">Photo's of Office</li>
            </ul>
            </li>
            <li className="nav-item"><Link onClick={closeHamburger}to="/contact-us">Contact Us & Enquiry</Link> 
              {/* <IoIosArrowDown />  */}
            </li>
            <li className="nav-item"><Link onClick={closeHamburger}to="/why-us/">Why Us?</Link></li>
          </ul>
      }

    </div>
  )
}
