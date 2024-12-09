import React from 'react'
import "../css/Home.css";


export default function Sidebar() {
  return (
    <div className="info-images">
                    <div className="side-sec">
                        <h3 className="side-sec-head">
                            <span className="heading">Manufacturing</span>
                        </h3>
                        <div className="head-info">
                            Supplied <strong>5000+</strong>&nbsp;
                            <strong>Transformers</strong> to various industries{" "}
                            <strong>
                                <em>all over India</em>
                            </strong>{" "}
                            
                        </div>
                        {/* <img
                            src="/Images/Trans-side-view.jpeg"
                            alt=""
                            className="sec-info-img"
                        />
                        <img
                            src="/Images/Trans-coil-bundle.jpeg"
                            alt=""
                            className="sec-info-img"
                        /> */}
                    </div>
                    <div className="side-sec">
                        <h3 className="side-sec-head">
                            <span className="heading">Repairing & Refurbishment</span>
                        </h3>

                        <img
                            src="/Images/repair1.jpg"
                            alt=""
                            className="sec-info-img"
                        />
                        <img
                            src="/Images/repair-2.jpg"
                            alt=""
                            className="sec-info-img"
                        />
                    </div>
                    <div className="side-sec">
                        <h3 className="side-sec-head">
                            <span className="heading">Testing</span>
                        </h3>

                        {/* <img
                            src="/Images/repair1.jpg"
                            alt=""
                            className="sec-info-img"
                        /> */}
                        <img
                            src="/Images/testing-facility.jpg"
                            alt=""
                            className="sec-info-img"
                        />
                    </div>
                    
                </div> 
  )
}
