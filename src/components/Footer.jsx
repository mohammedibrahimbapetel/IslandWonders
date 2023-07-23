import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem",
      }}
    >
      <div style={{ margin: "0rem 1rem" }}>
        Site by{" "}
        <a href="#" style={{ borderBottom: "1px solid #ffff" }}>
          Mohammed Ibrahim
        </a>
      </div>

      <div style={{ margin: " 0rem 1rem" }}>
        &#169; 2023; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
