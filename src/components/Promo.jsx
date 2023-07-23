import React from "react";
import "./Promo.css";
import { promo } from "../assets/images";

const Promo = () => {
  return (
    <div className="promo " id="promo">
      <div className="align-center">
        <h3 className="white-header">PROMO</h3>
      </div>
      <div className="promo-flex ">
        <div className="promo-image">
          <img src={promo} alt="" />
        </div>
        <div className="promo-text ">
          <div className=" promo-booking">
            <div className="date">28/07/2023</div>
            <div>
              Promotion from the Hilton Hotel
              <br />
              Chain 50% on Booking
            </div>
          </div>
          <div className=" promo-booking">
            <div className="date">28/07/2023</div>
            <div>
              Promotion from the Hilton Hotel
              <br />
              Chain 50% on Booking
            </div>
          </div>
          <div className=" promo-booking">
            <div className="date">28/07/2023</div>
            <div>
              Promotion from the Hilton Hotel
              <br />
              Chain 50% on Booking
            </div>
          </div>
          <div className=" promo-booking">
            <div className="date">28/07/2023</div>
            <div>
              Promotion from the Hilton Hotel
              <br />
              Chain 50% on Booking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
