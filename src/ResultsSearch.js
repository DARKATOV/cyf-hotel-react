import React, { useState } from "react";
import moment from "moment";

const ResultSearch = ({ result }) => {
  const [selectRow, setSelectedRow] = useState(false);
  const checkInDate = moment(result.checkInDate);
  const checkOutDate = moment(result.checkOutDate);
  const nights = checkOutDate.diff(checkInDate, "days");
  // function to print a row.
  const printRow = e => {
    console.log(e);
    selectRow ? setSelectedRow(false) : setSelectedRow(true);
  };
  return (
    <tr onClick={printRow} className={selectRow && "bg-info"} key={result.id}>
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
    </tr>
  );
};

export default ResultSearch;
