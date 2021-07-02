import React from "react";

const RestaurantButton = props => {
  return (
    <>
      <button onClick={props.orderOne} className="btn btn-primary">
        {" "}
        ADD{" "}
      </button>
    </>
  );
};

export default RestaurantButton;

// function orderOne(){
//     let [orders , setOrders] = useState(1)
//     return (
//         <button onClick={()=> { setOrders(orders+1)}} className= "btn btn-primary">Add</button>
//     )
// }
