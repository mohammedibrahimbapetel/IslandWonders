import React from "react";
import "./Review.css";
import { monica, abdul } from "../assets/images";
const Reviews = () => {
  return (
    <div className="padding ">
      <div className="align-center review">
        <h1 className="header">REVIEWS</h1>
      </div>

      <div className="flex gap">
        <div className="flex gap review-item">
          <div className="  review-image review-items align-center">
            <img src={monica} alt="" />
          </div>
          <div className=" review-items">
            <h3 className="subheader">MONICA JONSON</h3>
            <div className="stars"></div>
            <p>
              We selected a tour and quickly received polite assistance from the
              managers to choose the best option. Our villa provided wonderful
              food, everything was delicious.
            </p>
          </div>
        </div>
        <div className="flex gap review-item">
          <div className=" review-image review-items align-center">
            <img src={abdul} alt="" />
          </div>
          <div className="review-items">
            <h3 className="subheader">ABDUL MOHAMMED</h3>
            <div className="stars"></div>
            <p>
              The friendly waiters, beautiful reef next to the island with a
              variety of fish, and no need for shoes! Just some clothes, and
              don't forget masks, fins, and sunscreen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
