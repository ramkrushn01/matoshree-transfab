import React from "react";
import Sidebar from "./Sidebar";
import "../css/common/mainpages.css";
import { FaCalendar } from "react-icons/fa";

export default function ContactUs() {
    return (
        <div className="main">
            <div className="sub-main">
                <div className="sub-info">
                    <div className="sub-info-head">
                        Contact Us & Enquiry
                        <div className="date">
                            <FaCalendar /> June 13, 2022
                        </div>
                    </div>
                    <div className="sub-info-content">
                        <h4 className="h4-head">Address</h4>
                        <address>
                            MATOSHREE TRANSFAB MIDC PLOT NO A-126, LONI DEVAKAR
                            TAL-INDAPUR, DIST-PUNE 413132, MAHARASHTRA, INDIA
                        </address>
                        <a href="https://maps.app.goo.gl/W6yMEbiaMgUDXZUh9" target="_blank" style={{"color":"blue","textDecoration":"underline"}}>
                            view on map
                        </a>
                    </div>
                    <div className="contact">
                        <br />
                        Contact Us: Mobile: <a href="tel:+918335949494">+91 8335 949494</a>, <a href="tel:+918600115570">+91 86001 15570</a> <br />
                        Email: <a href="mailto:matoshree.transfab@gmail.com">matoshree.transfab@gmail.com</a>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
