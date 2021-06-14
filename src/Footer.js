import React from "react";

const Footer = function({ dataFoot }) {
  let newList = dataFoot.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="footer bg-dark text-light">
      <ul>{newList}</ul>
    </div>
  );
};

export default Footer;
