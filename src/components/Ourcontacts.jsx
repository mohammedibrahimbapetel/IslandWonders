import React from "react";
import "./Ourcontacts.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { map } from "../assets/images";
const Ourcontacts = () => {
  return (
    <div className="padding gap our-contacts flex" id="contacts">
      <div className="item">
        <h3 className="white-header ">OUR CONTACTS</h3>
        <p className="white-color">
          Smart Cafe, Yerima Street, Yola
          <br />
          Main office 'Yola Town' Adamawa
        </p>
        <p className="white-color">
          Number; +234 800 0000 000 <br />
          Email: info@gmail.com
        </p>
        <div className="icons-container">
          <div className="icons">
            <a href="#">
              <BsFacebook />
            </a>
          </div>
          <div className="icons">
            <a href="#">
              <BsTwitter />
            </a>
          </div>
          <div className="icons">
            <a href="#">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="item map">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Ourcontacts;
