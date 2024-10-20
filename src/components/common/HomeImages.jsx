import React from "react";
import "../../css/common/homeimages.css";
import { FaCalendar } from "react-icons/fa";

export default function HomeImages({ ImagePath, ImageName, CaptureDate, ImageHeight, ImageWidth}) {
    return (
        <div className="main-home-image" style={{"height":ImageHeight,"width":ImageWidth}}> 
            <div className="image">
                <img className="main-image" src={ImagePath} alt={ImageName} />
                <div className="content">
                    <div className="image-name">{ImageName}</div>
                    <div className="capture-date"><FaCalendar /><span className="date">{CaptureDate}</span></div>
                </div>
            </div>
        </div>
    );
}
