import React from "react";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  //instead of pushing we're doing by this way, so they our originial value will not get updated
});
//creating the global store, with the keys (the structure of the store).
//this is not to use the data, this is used to give auto-completion whenever needed.

export default CartContext;
