import React, { useState } from "react";
import moment from "moment";

const Row = ({ result }) => {
  let checkInDate = moment(result.checkInDate);
  let checkOutDate = moment(result.checkOutDate);
  let [selectRow, setSelectRow] = useState(false);
  let nights = checkOutDate.diff(checkInDate, "days");
  const test = () => {
    selectRow ? setSelectRow(false) : setSelectRow(true);
  };
  return (
    <tr onClick={test} className={selectRow && "bg-info"} key={result.id}>
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{nights}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
    </tr>
  );
};

export default Row;
