import React from "react";
import "../css/common/mainpages.css";
import Sidebar from "./Sidebar";
import { FaCalendar } from "react-icons/fa";

export default function Products() {
    return (
        <div className="main">
            <div className="sub-main">
                <div className="sub-main-img">
                    <img
                        src="/Images/trans-17.jpg"
                        alt="Distribution Transformer"
                    />
                </div>
                <div className="sub-info">
                    <div className="sub-info-head">
                        Power & Distribution Transformer
                        <div className="date">
                            <FaCalendar /> July 29, 2022
                        </div>
                    </div>
                    <div className="sub-info-content">
                        We offer a range of transformer services, including
                        factory overhauling, minor repairs, and major repairs,
                        for all types and models of transformers up to 10MVA and
                        33kV Class. Our specialized services include
                        refurbishment, voltage ratio conversion, tap changer
                        modifications from off-circuit to on-load, and, in some
                        cases, transitioning tank-mounted types to in-tank
                        configurations.
                        <br />
                        <br />
                        These services are available as turnkey solutions that
                        cover every step of the process, from dismantling and
                        relocation to transportation, erection, installation,
                        and commissioning. Each transformer repair is handled
                        with the same rigorous practices, quality planning,
                        processes, and testing equipment as our manufacturing
                        standards.
                        <br />
                        <br />
                        We have a dedicated facility with complete
                        infrastructure and advanced testing equipment, staffed
                        by experienced engineers and technicians, capable of
                        handling diverse projects and prioritizing based on
                        customer needs. Additionally, we maintain an inventory
                        of oil-cooled transformers in various ratings and
                        voltage configurations to address urgent requirements.
                        <br />
                        <br />
                        Our rental and service transformers are available to
                        support clients during significant transformer
                        breakdowns or planned outages for maintenance. The
                        rental transformers range from 63kVA to 1500kVA, with
                        primary voltages of 11kV or 22kV and secondary voltage
                        of 433V. We’re prepared to respond promptly to emergency
                        needs at the site, whether due to unexpected failures or
                        scheduled maintenance of a transformer.
                        <div className="fac-include">
                            <br /><h4 className="include-head">Testing:</h4>
                            <p>Our internal Testing Facility is capable of performing a wide range of tests, such as:</p>
                            <ul>
                                <li>Ratio Test</li>
                                <li>Induced High Voltage Test</li>
                                <li>Double Voltage Double Frequency Test</li>
                                <li>
                                    Impedance Voltage Test (No Load & Full Load
                                    Losses)
                                </li>
                                <li>Heat Run Test</li>
                                <li>
                                    Winding Resistance Test (Micro Ohm Meter)
                                </li>
                                <li>
                                    Additional Equipment:
                                    <ul>
                                        <li>Power Analyzer</li>
                                        <li>Oil BDV Tester</li>
                                        <li>Capacitor Load Bank</li>
                                        <li>Harmonic Analyzer</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
