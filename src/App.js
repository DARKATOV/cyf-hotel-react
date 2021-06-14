import React from "react";
import ButtonSearch from "./ButtonSearch";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Bookings from "./Bookings";

import "./App.css";

const App = () => {
  const dataFoot = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <ButtonSearch />
      <TouristInfoCards />
      <Footer dataFoot={dataFoot} />
    </div>
  );
};

export default App;
