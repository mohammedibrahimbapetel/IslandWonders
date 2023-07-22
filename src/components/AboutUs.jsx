import React from "react";
import "./AboutUs.css";
import { aboutus1, aboutus2 } from "../assets/images";

const AboutUs = () => {
  return (
    <div className="padding" id="aboutus">
      <div className="flex gap">
        <div className="aboutus-text item">
          <h1 className="header">ABOUT US</h1>
          <p>
            There are more than a thousand coral islands in the archipelago, and
            each of them is a small piece of heaven on earth. Hotels are a
            scattering of luxurious bungalows on the shores of the Indian Ocean.
          </p>
          <p>
            Lovers from all over the world come here, Whether they are newlyweds
            or families, You can also organize a symbolic wedding ceremony here.
          </p>
        </div>
        <div className="aboutus-image item">
          <img src={aboutus1} alt="" />
        </div>
      </div>
      <div className="flex gap column-reverse">
        <div className="aboutus-image item">
          <img src={aboutus2} alt="" />
        </div>
        <div className="aboutus-text item">
          <p>
            Today we occupy a leading position in our niche. we have the best
            tours to the Maldives. Many clients come to us, and there is not a
            single negative feedback. We pay great attention to customer focus
            and practice an integrated approach to quality in our work.
          </p>
          <p>
            This means quality in everything from the product offered to the
            work of employees in all departments. Relations with partners are
            built on a long-term mutually beneficial basis. That is why all
            partners of the company are its true friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
