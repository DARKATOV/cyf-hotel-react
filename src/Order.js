import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

let Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <>
      <li>
        {orderType} :{`${orders} `}
        <RestaurantButton orderOne={orderOne} className="align" />
      </li>
    </>
  );
};

export default Order;
