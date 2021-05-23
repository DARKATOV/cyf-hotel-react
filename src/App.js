import React from "react";
import ButtonSearch from "./ButtonSearch";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <ButtonSearch />
      <TouristInfoCards />
    </div>
  );
};

export default App;
