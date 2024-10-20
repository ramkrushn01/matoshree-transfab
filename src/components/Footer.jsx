import React from "react";
import "../css/Footer.css";

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-upper">
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">About US</h2>
                    <div className="footer-upper-content">
                    Established in 1984,  is a leading Manufacturer of Power & Distribution Transformers. The company is registered with SSI and has the entire infrastructure to manufacture Transformers upto 5MVA & voltage class of 11KV, 22KV, 33KV. The manufacturing is in accordance with the strict quality assurance procedure which meets the all national standards.
                    </div>
                </div>
                <div className="footer-upper-sections">
                    <h2 className="footer-upper-sec-head">Quick Links</h2>
                    <div className="footer-upper-content">
                        <ul>
                            <li>Company Profile</li>
                            <li>Vision & Mission</li>
                            <li>Management Team</li>
                            <li>Infrastructure</li>
                            <li>Gallery</li>
                            <li>Career</li>
                            <li>Clients</li>
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
                        RAKESH TRANSFORMER INDUSTRIES PVT. LTD. W-240 ” S ”
                        Block, M. I. D. C., Bhosari, Pune – 411 026,
                        Maharashtra, India
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
