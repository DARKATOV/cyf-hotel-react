import React, { useState } from "react";
import Row from "./Row";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Nights</th>
            <th>Firt name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in date</th>
            <th>Check out date</th>
          </tr>
        </thead>
        {results.map(result => {
          return <Row result={result} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults;
