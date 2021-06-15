import React, { useState } from "react";
import ResultSearch from "./ResultSearch";

const SearchResults = ({ bookings }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>FIRST NAME</th>
            <th>SURNAME</th>
            <th>EMAIL</th>
            <th>ROOM ID</th>
            <th>CHECK IN DATE</th>
            <th>CHECK OUT DATE</th>
          </tr>
        </thead>
        {bookings.map(result => {
          return <ResultRow result={result} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults;
