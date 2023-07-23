import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="nav">
        <a href="#aboutus">About Us </a>
        <a href="#tours">Tours</a>
        <a href="#entertainment">Entertainment </a>
      </div>
      <div className="nav-island-wonders">Island Wonders</div>

      <div className="nav">
        <a href="#promo">Promo</a>
        <a href="#reviews">Reviews</a>
        <a href="#contacts">Our Contacts </a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
