import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  let [idProfile, setIdProfile] = useState(null);
  let [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("GO!, DO IT!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
