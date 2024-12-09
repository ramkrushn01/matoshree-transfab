import React from "react";
import "../css/common/mainpages.css";
import Sidebar from "./Sidebar";
import { FaCalendar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function InfrastructureFacility() {
    return (
        <div className="main">
            <div className="sub-main">
                <div className="sub-main-img">
                    <img
                        src="/Images/infrastructure1.jpg"
                        alt="Infrastructure and Facilities"
                    />
                </div>
                <div className="sub-info">
                    <div className="sub-info-head">
                        Infrastructure & Manufacturing Facilities
                        <div className="date">
                            <FaCalendar /> July 22, 2022
                        </div>
                    </div>
                    <div className="sub-info-content">
                        <b>
                            <span className="color-red">
                                MATOSHREE TRANSFAB
                            </span>{" "}
                            INDUSTRIES,
                        </b>{" "}
                        is a leading Manufacturer of Power & Distribution
                        Transformers. The company is registered with SSI and has
                        the entire infrastructure to manufacture Transformers
                        upto 5MVA & voltage class of 11KV, 22KV, 33KV. The
                        manufacturing is in accordance with the strict quality
                        assurance procedure which meets the all national
                        standards.
                        <div className="sub-main-img">
                            <br />
                            <img
                                src="/Images/infrastructure1.jpg"
                                alt="Infrastructure and Facilities"
                            />
                        </div>
                        <div className="sub-head">
                            Infrastructure & Facility
                        </div>
                        Ours is a Well established <b>SSI Unit </b> having our
                        own setup with regular workforce of 22 persons enjoying
                        all the benefits including E.S.I., P.F. bonus etc. Our
                        Unit was established in 2022.
                        <div className="sub-head">Our Setup</div>
                        <b>Plot Area:</b> 10000 S.FT <b>Office Area: </b> 800
                        S.FT <br />
                        <b>Shed Area:</b> 5000 S.FT <b>Total Power:</b> 30HP
                        <div className="sub-info-content-quat">
                            <p>
                        <RiDoubleQuotesL className="quote" />
                                We have team of in-house design engineers. We
                                also have tie-up with design consultants having
                                rich experience of more than 35 years.
                            </p>
                        </div>
                        <div className="fac-include">
                            <h4 className="include-head">
                                Our Our Manufacturing facilities include:
                            </h4>
                            <br />
                            <ul>
                                <li>EOT crane 5 ton</li>
                                <li>
                                    Semi automatic winding machines – 2nos hv &
                                    2nos lv
                                </li>
                                <li>
                                    Oven 24kw – can accommodate upto 10mva
                                    transformer
                                </li>
                                <li>
                                    High vacuum transformer oil filtration
                                    machine
                                </li>
                                <li>Required tools & tackles etc,</li>
                            </ul>
                        </div>
                        <div className="test-include">
                            <br />
                            <h4 className="include-head">
                                Our Testing facilities include:
                            </h4>
                            <br />
                            <ul>
                                <li>
                                    Power analyser make:- yokogawa w-230 / w333e
                                </li>
                                <li>Automatic ratio meter make :- eltel</li>
                                <li>
                                    Transformer test panel with dvdf & ssvt test
                                    facilities
                                </li>
                                <li>
                                    Insulation resistnace tester :- make waco
                                    2.5kv
                                </li>
                                <li>Micro ohm meter :- make prestige make</li>
                            </ul>
                            <br />
                        </div>
                        <div className="sub-main-img">
                            <img
                                src="/Images/infrastructure.jpg"
                                alt="Infrastructure and Facilities"
                            />
                        </div>
                        <div className="sub-main-img">
                            <br />
                            <img
                                src="/Images/infrastructure2.jpg"
                                alt="Infrastructure and Facilities"
                            />
                        </div>
                        <div className="sub-main-img">
                            <br />
                            <img
                                src="/Images/testing-facility (1).jpg"
                                alt="Infrastructure and Facilities"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
