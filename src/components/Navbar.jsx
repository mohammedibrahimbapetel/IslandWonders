import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  return (
    <>
      <div className="navbar ">
        <div className="nav">
          <a href="#aboutus">About Us </a>
          <a href="#tours">Tours</a>
          <a href="#entertainment">Entertainment </a>
        </div>
        <div className="nav-island-wonders">
          <a href="#home"> Island Wonders</a>
        </div>
        <div className="nav">
          <a href="#promo">Promo</a>
          <a href="#reviews">Reviews</a>
          <a href="#contacts">Our Contacts </a>
        </div>
        <div className="bar" onClick={() => setTogglemenu(true)}>
          <FaBars />
        </div>
      </div>
      {togglemenu && (
        <div className="smallscreen-nav">
          <div className="closed-menubar" onClick={() => setTogglemenu(false)}>
            <BsXLg />
          </div>
          <div className="smallscreen-navlinks">
            <a href="#aboutus" onClick={() => setTogglemenu(false)}>
              About Us
            </a>
            <a href="#tours" onClick={() => setTogglemenu(false)}>
              Tours
            </a>
            <a href="#entertainment" onClick={() => setTogglemenu(false)}>
              Entertainment
            </a>
            <a href="#promo" onClick={() => setTogglemenu(false)}>
              Promo
            </a>
            <a href="#reviews" onClick={() => setTogglemenu(false)}>
              Reviews
            </a>
            <a href="#contacts" onClick={() => setTogglemenu(false)}>
              Our Contacts
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
