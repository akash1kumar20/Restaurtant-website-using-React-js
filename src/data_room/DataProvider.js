import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultValue = {
  items: [],
  currentAmount: 0,
};

const reducerFn = (latestSnapShot, actionTaken) => {
  if (actionTaken.do === "PLUS") {
    const totalItemAmount =
      latestSnapShot.currentAmount +
      actionTaken.item.price * actionTaken.item.quantity;
    const indexPresent = latestSnapShot.items.findIndex(
      (item) => item.id === actionTaken.item.id
    );
    //if the item we're adding by actionTaken step has the same id of the item already present in the items it return true, else false.
    const alreadyPresentItems = latestSnapShot.items[indexPresent];
    //this will only run, when the above function return true.

    let itemAdded;
    if (alreadyPresentItems) {
      const addedAgain = {
        ...alreadyPresentItems,
        quantity: alreadyPresentItems.quantity + actionTaken.item.quantity,
      };
      itemAdded = [...latestSnapShot.items];
      //edit the items in array immutably, without editing old array in memory
      itemAdded[indexPresent] = addedAgain;
      //if the item is already present in the array, we pick that item and overwrite with the addedAgain item.
    }
    //if the item is adding for the first time.
    else {
      itemAdded = latestSnapShot.items.concat(actionTaken.item);
      //concat gives us a new array, it will not added the old array in the memory.
    }

    return {
      items: itemAdded,
      currentAmount: totalItemAmount,
    };
  }

  if (actionTaken.do === "MINUS") {
    const indexPresent = latestSnapShot.items.findIndex(
      (item) => item.id === actionTaken.id
    );
    const alreadyPresentItems = latestSnapShot.items[indexPresent];
    const totalItemAmount =
      latestSnapShot.currentAmount - alreadyPresentItems.price;
    let itemAdded;
    if (alreadyPresentItems.quantity === 1) {
      itemAdded = latestSnapShot.items.filter(
        (item) => item.id !== actionTaken.id
      );
      //item which have the same id, as the current item id, it return false, it will get remove from the array.
    } else {
      const addedAgain = {
        ...alreadyPresentItems,
        quantity: alreadyPresentItems.quantity - 1,
      };
      itemAdded = [...latestSnapShot.items];
      itemAdded[indexPresent] = addedAgain;
      //almost similar logic, as we do when we were adding new items of same id.
    }
    return {
      items: itemAdded,
      currentAmount: totalItemAmount,
    };
  }
  return defaultValue;
};

const DataProvider = (props) => {
  //as we're dealing with complex data, that's why using reducer instead of state.
  const [latestState, dispatchFn] = useReducer(reducerFn, defaultValue);

  //using state so, each time on re-rendering our value also get update.
  const addedInCart = (item) => {
    dispatchFn({ do: "PLUS", item: item });
    //forwading my item which come from this function to the reducer
  };

  const removeFromCart = (id) => {
    dispatchFn({ do: "MINUS", id: id });
  };

  const cartContext = {
    items: latestState.items,
    totalAmount: latestState.currentAmount,
    addItem: addedInCart,
    removeItem: removeFromCart,
  };
  // all the data from context is managing here so no other component to deal with managing. Here we giving the right values which the components need.
  return (
    <CartContext.Provider value={cartContext}>
      {/* value is set a value for the prop CartContext.Provider  */}
      {props.children}
      {/* this allow to pass any component which need access to this component with the DataProvider component */}
    </CartContext.Provider>
  );
};
//the purpose of this component to manage the current context and it should provide the data to all the component which needs the data.

export default DataProvider;
