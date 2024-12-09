import React from "react";
import "../css/Home.css";
import HomeImages from "./common/HomeImages";
import Sidebar from "./Sidebar";

export default function Home() {
    return (
        <div className="main-home">
            <div className="upper-photo-sec">
                <div className="main-image">
                    <HomeImages
                        ImagePath={"Images/Full-Name.jpeg"}
                        ImageName={
                            "Matoshree Transfab"
                        }
                        CaptureDate={"March 22, 2022"}
                        ImageWidth={"600px"}
                        ImageHeight={"400px"}
                    />
                </div>
                <div className="signal-image">
                    <HomeImages
                        ImagePath={"Images/Line-Trans.jpeg"}
                        ImageName={"Matoshree Transfab"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/Trans-Coils.jpeg"}
                        ImageName={"Matoshree Transfab"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/Brown-Trans.jpeg"}
                        ImageName={"Matoshree Transfab"}
                        CaptureDate={"August 21, 2022"}
                    />
                    <HomeImages
                        ImagePath={"Images/infrastructure.jpg"}
                        ImageName={"Matoshree Transfab"}
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
                        <span className="color-red">Matoshree Transfab{" "}</span>
                        INDUSTRIES, Established in 2022, is a leading
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
                    {/* <img src="Images/glorious-30-years-1.png" /> */}
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
                <Sidebar/>
            </div>
        </div>
    );
}
