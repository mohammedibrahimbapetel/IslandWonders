import React from "react";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  return (
    <div className="card">
      <div className="tour-image">
        <img src={tour.photo.images.large.url} alt="" />
      </div>
      <h4>{tour.name}</h4>
    </div>
  );
};

export default TourCard;
