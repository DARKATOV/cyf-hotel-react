import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div id="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="Pizzas" />
          <Order orderType="Pastas" />
          <Order orderType="Postres" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
