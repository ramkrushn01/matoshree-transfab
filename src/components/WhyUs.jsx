import React from "react";
import "../css/common/mainpages.css";
import Sidebar from "./Sidebar";
import { FaCalendar } from "react-icons/fa";

export default function WhyUs() {
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
                        Why Us?
                        <div className="date">
                            <FaCalendar /> July 22, 2022
                        </div>
                    </div>
                    <section id="why-us">
                        <h2>Why Choose Matoshree Transfab?</h2>
                        <p>
                            <br />  
                            At{" "}
                            <strong>
                                Matoshree Transfab
                            </strong>
                            , we have established a reputation across India with
                            over 30 years of industry experience, supplying more
                            than 5,000 transformers nationwide. Our products are
                            built to last, with a proven lifespan of over 30
                            years, meeting the diverse needs of various
                            industries.
                        </p>
                        <p>
                            <br />
                            Our commitment to quality is backed by strict
                            quality assurance procedures that align with all
                            national standards, ensuring safe and reliable
                            transformers for every client. With a network of
                            over eight authorized service teams across different
                            cities, we provide unmatched sales support,
                            including oil filtration, on-site oil testing, and
                            annual maintenance contracts.
                        </p>
                        <p>
                            <br />
                            We are dedicated to timely delivery and customer
                            satisfaction. Our facilities are designed for
                            efficient production, staffed by skilled
                            professionals, and equipped to handle manufacturing
                            and refurbishing transformers up to 5MVA and voltage
                            classes of 11KV, 22KV, and 33KV.
                        </p>
                        <p>
                            <br />
                            Choose Matoshree Transfab for reliable, high-quality
                            transformers, supported by a trusted team of experts
                            committed to excellence and innovation in energy
                            solutions.
                        </p>
                    </section>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
