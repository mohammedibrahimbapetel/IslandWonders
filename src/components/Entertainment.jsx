import React from "react";
import { entertainment } from "../assets/images";

const Entertainment = () => {
  return (
    <div className="flex gap padding column-reverse" id="entertainment">
      <div className=" item-image item">
        <img src={entertainment} alt="" />
      </div>
      <div className="item">
        <h1 className="header"> ENTERTAINMENT </h1>
        <p>
          Sea turtles have been living in the maldives since time immmemorial.
          These gentle reptiles are listed in the Red Book and are protected by
          an international convention.
        </p>
        <p>
          The most common type of sea turtle found in the Maldives is the green
          Turtle. During the excursion you will be able to get to know these
          charming creatures better and even swim in their company.
        </p>
        <button className="button">
          <a href="#"> BOOK A TICKET</a>
        </button>
      </div>
    </div>
  );
};

export default Entertainment;
