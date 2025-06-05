import React from 'react';
import "../css/PhotoOfWorkshop.css";

const imageNames = [
    "G-Work1.jfif",
    "G-Work2.jfif",
    "G-Work3.jfif",
    "G-Work4.jfif",
    "G-Work5.jfif",
    "G-Work6.jfif",
    "G-Work7.jfif",
    "G-Work8.jfif",
  ];

export default function PhotoOfWorkShop() {
  return (
    <div className="grid-gallery">
    {imageNames.map((img, index) => (
      <div className="grid-item" key={index}>
        <img src={`/Images1/${img}`} alt={`Work ${index + 1}`} />
      </div>
    ))}
  </div>
  )
}
