import React, { useState } from "react";
import CartContext from "./CartContext";

const DataProvider = (props) => {
  const [items, updateItems] = useState([]);
  //using state so, each time on re-rendering our value also get update.
  const addedInCart = (item) => {
    updateItems([...items, item]);
    console.log("avaialble", cartContext);
  };

  const removeFromCart = (id) => {};

  const cartContext = {
    items: items,

    addItem: addedInCart,
    removeItem: removeFromCart,
  };
  // all the data from context is managing here so no other component to deal with managing. Here we giving the right values which the components need.
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {/* this allow to pass any component which need access to this component with the DataProvider component */}
    </CartContext.Provider>
  );
};
//the purpose of this component to manage the current context and it should provide the data to all the component which needs the data.

export default DataProvider;
