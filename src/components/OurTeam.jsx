import React from "react";
import "../css/OurTeam.css";
import Sidebar from "./Sidebar";
import { FaCalendar } from "react-icons/fa";

export default function OurTeam() {
    return (
        <div className="main-our-team">
            <div className="our-team">
                <div className="team-head">Management Team</div>
                <span className="date">
                      <FaCalendar /> {"  "} Jane 1, 2022
                  </span>
                  <div className="team-content">
                    <p>The  activities of <b>Group</b> are presently managed by :</p><br />
                    <p><span className="color-blue">The Family of Matoshree Transfab </span>(Founder & CEO)</p>
                    <div className="img-info-about-ceo">
                        <div className="ceo-img">
                            <img src="/matoshree-transfab-logo.png" alt="" />
                        </div>
                        <div className="ceo-info">
                            <p><b>Our Team</b> has started business in the year 2022, he is first generation entrepreneur.</p><br />
                            <p>Started business after passing out immediately, has started with a small Industrial shop and over the team.</p><br />
                            <p>We have the vision to Increased business in two fold.</p>
                        </div>
                    </div>
                  </div>
            </div>

            <Sidebar />
        </div>
    );
}
