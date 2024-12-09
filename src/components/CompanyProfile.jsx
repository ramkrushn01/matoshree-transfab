import React from 'react';
import "../css/CompanyProfile.css";
import Sidebar from './Sidebar';
import { FaCalendar } from "react-icons/fa";


export default function CompanyProfile() {
  return (
      <div className="company-profile-main">
          <div className="main-profile">
              <div className="poster-img">
                  <img
                      src="/Images/Trans-openwell.jpeg"
                      alt="Company Profile"
                  />
              </div>
              <div className="profile-head">
                  <h2>Company Profile</h2>
                  <span className="date">
                      <FaCalendar /> Jane 29, 2022
                  </span>
              </div>
              <div className="profile-info">
                  <div className="profile-info-head">Overview:</div>
                  <div className="profile-info-content">
                      Established in 2022{" "}
                      <span className="color-red">
                          <b>MATOSHREE TRANSFAB</b>
                      </span>{" "}
                      INDUSTRIES, is a leading{" "}
                      <span className="color-blue">
                          {" "}
                          <b>
                              {" "}
                              Manufacturer of Power & Distribution Transformers.
                          </b>
                      </span>{" "}
                      The company is registered with SSI and has the entire
                      infrastructure to manufacture Transformers upto
                      <span className="color-brown">
                          {" "}
                          <b> 5MVA & voltage class of 11KV, 22KV, 33KV.</b>
                      </span>{" "}
                      The manufacturing is in accordance with the strict quality
                      assurance procedure which meets the all national
                      standards.
                  </div>
              </div>
              <div className="quality-policy profile-info">
                  <div className="head">Quality Policy</div>
                  <div className="profile-info-content">
                      We are committed to produce high quality and reasonably
                      priced products so as to achieve customers’ delight. We
                      will strive for innovation in our products and continual
                      improvement in our processes along with deliveries and
                      housekeeping while conforming to the latest International
                      Standards.
                  </div>
              </div>
              <div className="vision-mission profile-info" id="vision-mission">
                  <div className="head">Vision & Mission</div>
                  <div className="vision">
                      <div className="vm-txt">Vision</div>
                      <ul>
                          <li>
                              Committed to providing highest quality products,
                              Competitively price with services exceeding our
                              customer expectations.
                          </li>
                          <li>
                              We will continue to invest in facilities, systems
                              & highly technical personnel providing added value
                              to our business relationships.
                          </li>
                          <li>Being honest with our clients</li>
                          <li>
                              Encouraging alternative form of energy
                              generations.
                          </li>
                          <li>
                              Promoting health & Well being of our clients, our
                              staff & Our environment.
                          </li>
                      </ul>
                  </div>
                  <div className="mission">
                      <div className="vm-txt">Mission</div>
                      <ul>
                          <li>Deliver on our promises.</li>
                          <li>Provides quality customer service & advice.</li>
                          <li>
                              Guarantee safe, Consistent, Economical,
                              Innovative, Electrical Solutions to all our
                              clients.
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="infra-facility profile-info">
                  <div className="head">Infrastructure & Facility</div>
                  <div className="profile-info-content">
                      Ours is a Well established SSI Unit having our own setup
                      with regular workforce of 22 persons enjoying all the
                      benefits including E.S.I., P.F. bonus etc. Our Unit was
                      established in 2022.
                  </div>
              </div>
              <div className="our-setup profile-info">
                  <div className="head">Our Setup</div>
                  <div className="profile-info-content">
                      <b>Plot Area:</b> 10000 S.FT Office Area: 800 S.FT <br />
                      <b>Shed Area:</b> 5000 S.FT Total Power: 30HP
                  </div>
              </div>
              <div className="why-us profile-info">
                  <div className="head">Why Us?</div>
                  <div className="profile-info-content">
                      <ul>
                          <li>
                              <span className="green-tick"></span>Supplied 5000+
                              transformers across all industries.
                          </li>
                          <li>
                              <span className="green-tick"></span>PAN India
                              presence since 2022.
                          </li>
                          {/* <li>
                              <span className="green-tick"></span>Products life
                              more than  - Our transformers are working
                              properly in field from last 30+ years.
                          </li> */}
                          <li>
                              <span className="green-tick"></span>Strong Sales
                              Support <br />
                              – Oil filtration & oil Testing at site <br />
                              – Annual maintenance contract <br />
                              – Authorized 8+ service teams in various cities{" "}
                              <br />
                          </li>
                          <li>
                              <span className="green-tick"></span>Quality & in
                              time delivery
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <Sidebar />
      </div>
  );
}
