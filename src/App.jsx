import React from "react";
import "./App.css";
import {
  Navbar,
  Home,
  AboutUs,
  Tours,
  Entertainment,
  Promo,
  Reviews,
  Ourcontacts,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <div id="bg">
      <Navbar />
      <Home />
      <AboutUs />

      <Tours />
      <Entertainment />
      <Promo />
      <Reviews />
      <Ourcontacts />
      <Footer />
    </div>
  );
};

export default App;
