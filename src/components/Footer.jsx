import React from "react";
import "../css/Footer.css";
import { Link } from 'react-router-dom';


export default function Footer() {
    const goToTop = ()=>{
        window.scrollTo(0,0);
    }
    return (
        <div className="main-footer">
            <div className="footer-upper">
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">About US</h2>
                    <div className="footer-upper-content">
                    Established in 2022,  is a leading Manufacturer of Power & Distribution Transformers. The company is registered with SSI and has the entire infrastructure to manufacture Transformers upto 5MVA & voltage class of 11KV, 22KV, 33KV. The manufacturing is in accordance with the strict quality assurance procedure which meets the all national standards.
                    </div>
                </div>
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">Quick Links</h2>
                    <div className="footer-upper-content">
                        <ul>
                            <li> <Link to="/company-profile/" onClick={goToTop}>Company Profile</Link></li>
                            <li> <Link to="/company-profile/#vision-mission" onClick={goToTop}> Vision & Mission </Link> </li>
                            <li> <Link to="/our-team/" onClick={goToTop}> Management Team </Link> </li>
                            <li> <Link to="/infrastructure-facilities/" onClick={goToTop}> Infrastructure </Link> </li>
                            <li> <Link to="#" onClick={goToTop}> Gallery </Link> </li>
                            <li> <Link to="/products/" onClick={goToTop}> Products </Link> </li>
                            <li> <Link to="/clients/" onClick={goToTop}> Clients </Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">Our Products</h2>
                    <div className="footer-upper-content">
                        <ul>
                            <li>Power transformer</li>
                            <li>Distribution transformer</li>
                            <li>Single Phase transformer</li>
                            <li>Three phase isolation</li>
                            <li>Dry Type transformer</li>
                            <li>Hermetically sealed Transformer</li>
                            <li>Package substations</li>
                            <li>Pad mounted substations</li>
                            <li>Dry Type Reactors</li>
                            <li>AC/DC Chokes</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">Contact Us</h2>
                    <div className="footer-upper-content">
                        MATOSHREE TRANSFAB MIDC PLOT NO A-126, LONI DEVAKAR TAL-INDAPUR, DIST-PUNE 413132,
                        MAHARASHTRA, INDIA
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <div className="copy-right">
                    Copyright &#169; 2024 <a href="/" className="link"> Matoshree Transfab</a>. All rights
                    reserved.
                </div>
                <div className="social-media"></div>
            </div>
        </div>
    );
}
