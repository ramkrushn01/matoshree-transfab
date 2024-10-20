import React from "react";
import "../css/Home.css";
import HomeImages from "./common/HomeImages";

export default function Home() {
    return (
        <div className="main-home">
            <div className="upper-photo-sec">
                <div className="main-image">
                    <HomeImages
                        ImagePath={"Images/Full-Name.jpeg"}
                        ImageName={
                            "Matoshree Transfab Line Transformer Pvt Ltd"
                        }
                        CaptureDate={"March 22, 2021"}
                        ImageWidth={"600px"}
                        ImageHeight={"400px"}
                    />
                </div>
                <div className="signal-image">
                    <HomeImages
                        ImagePath={"Images/Line-Trans.jpeg"}
                        ImageName={"Matoshree Transfab and company pvt ltd"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/Trans-Coils.jpeg"}
                        ImageName={"Matoshree Transfab and company pvt ltd"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/Brown-Trans.jpeg"}
                        ImageName={"Matoshree Transfab and company pvt ltd"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/Trans-openwell.jpeg"}
                        ImageName={"Matoshree Transfab and company pvt ltd"}
                        CaptureDate={"August 21, 2022"}
                    />
                </div>
            </div>

            <div className="lower-content-sec">
                <div className="content">
                    <h1 className="com-heading">
                        <span className="color-blue">Welcome To </span>
                        <span className="color-red"> Matoshree Transfab</span>
                    </h1>
                    <div className="info-content">
                        <span className="color-red">Matoshree Transfab</span>
                        INDUSTRIES PVT. LTD, Established in 2022, is a leading
                        <span className="color-blue">
                            {" "}
                            Manufacturer of Power & Distribution Transformers.
                        </span>
                        The company is registered with SSI and has the entire
                        infrastructure to manufacture Transformers upto{" "}
                        <span className="color-brown">
                            5MVA & voltage class of 11KV, 22KV, 33KV.
                        </span>{" "}
                        The manufacturing is in accordance with the strict
                        quality assurance procedure which meets the all national
                        standards.
                    </div>
                    <img src="Images/glorious-30-years-1.png" />
                    <h1 className="lower-sec-head">
                        Our Transformer Manufacturing Range
                    </h1>
                    <div className="grid-image-container">
                        <div className="grid-img">
                            <img src="/Images/GridImages/1.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/2.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/3.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/4.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/5.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/6.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/7.jpg" alt="" />
                        </div>
                        <div className="grid-img">
                            <img src="/Images/GridImages/8.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
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
                        since <strong>30+ Years. </strong>
                    </div>
                    <img
                        src="Images/Trans-side-view.jpeg"
                        alt=""
                        className="sec-info-img"
                    />
                    <img
                        src="Images/Trans-coil-bundle.jpeg"
                        alt=""
                        className="sec-info-img"
                    />
                </div>
            </div>
        </div>
    );
}
