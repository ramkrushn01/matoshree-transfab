import React from "react";
import Sidebar from "./Sidebar";
import { FaCalendar } from "react-icons/fa";

export default function Services() {
    return (
        <div className="main">
            <div className="sub-main">
                <div className="sub-main-img">
                    <img src="/Images/serv-1.jpeg" alt="Services" />
                </div>
                <div className="sub-info">
                    <div className="sub-info-head">
                        Repairing & Refurbishment
                        <div className="date">
                            <FaCalendar /> July 22, 2022
                        </div>
                    </div>
                    <div className="sub-info-content">
                        We provide Repairing & Refurbishment of transformers as
                        follows
                        <br />
                        <div className="test-include">
                            <h4 className="include-head">
                                <br />
                                TRANSFORMER SERVICE ACTIVITIES
                            </h4>
                            <br />
                            <ol>
                                <li>Transformer Installation</li>
                                <li>Transformer Movement and Relocation</li>
                                <li>Supply / Spare Parts / Transformers</li>
                                <li>Redundant Equipment</li>
                                <li>Oil Activities</li>
                                <li>Transformer LV Tests</li>
                                <li>Transformer HV Tests</li>
                                <li>Transformer Life Assessment</li>
                            </ol>
                        </div>
                        <div className="test-include">
                            <h4 className="include-head">
                                <br />
                                TRANSFORMER SERVICE MAINTENANCE
                            </h4>
                            <br />
                            <ol>
                                <li>Re-gasketing</li>
                                <li>Radiator and Cooler Replacement</li>
                                <li>Bushing Replacement</li>
                                <li>Gauge Replacement and Calibration</li>
                                <li>Leak Repair</li>
                                <li>OLTC Maintenance</li>
                                <li>Transformer Repair</li>
                                <li>Transformer Refurbishment</li>
                                <li>Transformer Upgrading</li>
                                <li>Unit Repair Set</li>
                                <li>Battery Maintenance</li>
                                <li>Breaker Maintenance</li>
                                <li>Expertise and Consultancy</li>
                            </ol>
                        </div>
                        <div className="test-include">
                            <h4 className="include-head">
                                <br />
                                Onsite Services:
                            </h4>
                            <br />
                            <ol>
                                <li>Major repairs – all OEMs</li>
                                <li>
                                    Installation of new load tap changers –
                                    repairs, services
                                </li>
                                <li>Repairs to fire damaged units</li>
                                <li>
                                    Remanufacture and repairs up to 1000 MVA
                                </li>
                                <li>Testing – full IEEE / CSA tests</li>
                                <li>Provide and install gas monitoring –</li>
                                <li>Kelman, Hydran</li>
                                <li>Reconditioning</li>
                                <li>Oil processing – 18 rigs nationwide</li>
                                <li>Regasketing</li>
                                <li>Bushing and gauge replacement</li>
                                <li>Replace fluids – mineral, FR3</li>
                            </ol>
                        </div>
                        <div className="test-include">
                            <h4 className="include-head">
                                <br />
                                Onsite High Voltage Testing:
                            </h4>
                            <br />
                            <ol>
                                <li>Portable induced testing to 1500 MVA</li>
                                <li>Portable impulse testing to 525 kV</li>
                                <li>
                                    Portable no load and load testing to 800 MVA
                                </li>
                            </ol>
                        </div>
                        <div className="sub-main-img">
                            <br />
                            <img
                                src="/Images/testing-facility (1).jpg"
                                alt="Infrastructure and Facilities"
                            />
                        </div>
                        <div className="test-include">
                            <br />
                            <h4 className="include-head">
                                Transformer Refurbishment
                            </h4>
                            When the end-of-life period is approaching for your
                            transformer, the traditional option is to replace it
                            with a new product.Likewise with the aged
                            transformers there is a high potential for the
                            failure rate of transformers to increase and also
                            create an increased demand for replacement of the
                            aged transformers.But alternately, there is an
                            option for complete refurbishment of your aged
                            transformer which is cost effective by 30%-50%
                            depending on the configuration of your transformer
                            versus to a new transformer. The lead time also
                            could be reduced to almost 50%.
                            <h4 className="h4-head">
                                EXTEND YOUR TRANSFORMER LIFE
                            </h4>
                            <h4 className="h4-head">
                                WITH AGECO INTERNATIONAL FZE
                            </h4>
                            <h4 className="h4-head">
                                TO SAVE YOUR TIME AND MONEY
                            </h4>
                        </div>
                        <div className="test-include">
                            <p>
                                <strong>Matoshree Transfab</strong> values
                                its customers as partners and consistently
                                provides them with the optimal solutions for
                                their requirements; thus, we serve as an
                                alternative to purchasing new transformers.{" "}
                                <strong>Matoshree Transfab</strong> offers
                                on-site refurbishment that enables the
                                transformer to be delivered in a shorter
                                timeframe and energized into service much sooner
                                than a new unit. This option may include winding
                                replacements, on-load tap changer replacements,
                                bushing replacements, oil changes, and accessory
                                replacements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
