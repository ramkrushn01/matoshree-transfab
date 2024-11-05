import React from "react";
import Sidebar from "./Sidebar";
import "../css/common/mainpages.css";
import { FaCalendar } from "react-icons/fa";
import "../css/Clients.css";

export default function Clients() {
    return (
        <div className="main">
            <div className="sub-main">
                <div className="sub-main-img">
                    {/* <img
                        src="/Images/infrastructure1.jpg"
                        alt="Infrastructure and Facilities"
                    /> */}
                </div>
                <div className="sub-info">
                    <div className="sub-info-head">
                        Clients
                        <div className="date">
                            <FaCalendar /> July 13, 2022
                        </div>
                    </div>
                    <div className="client-list-main">
                        <img src="/Images/logo_1.jpg" alt="" className="client" />
                        <img src="/Images/client6.jpg" alt="" className="client" />
                        <img src="/Images/client1.jpg" alt="" className="client" />
                        <img src="/Images/client2.jpg" alt="" className="client" />
                        <img src="/Images/client13.jpg" alt="" className="client" />
                        <img src="/Images/client14.jpg" alt="" className="client" />
                        <img src="/Images/client27.jpg" alt="" className="client" />
                        <img src="/Images/client26.jpg" alt="" className="client" />
                        <img src="/Images/client28.jpg" alt="" className="client" />
                        <img src="/Images/rcl-6.jpg" alt="" className="client" />
                        <img src="/Images/rcl-19.jpg" alt="" className="client" />
                        <img src="/Images/rcl-26.jpg" alt="" className="client" />
                        <img src="/Images/rcl-49.jpg" alt="" className="client" />
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
