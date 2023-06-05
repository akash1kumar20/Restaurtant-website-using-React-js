import React, { useContext } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../data_room/CartContext";

function HeaderButton(props) {
  const cartCtx = useContext(CartContext);
  const count = cartCtx.items.reduce((currCount, item) =>
    //reduce is being used to return a single value
    {
      return currCount + Number(item.quantity);
    }, 0);
  //intital value of quantity is zero.
  const total = cartCtx.items.reduce((initialPrice, item) => {
    return initialPrice + item.price;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onclick}>
      {/* Here props.onclick is the function coming from the Header component */}
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span className={classes.badge}>{count} ITEM ADDED</span>
      <span className={classes.badge}>TOTAL VALUE = {total} </span>

      <span className={classes.badge}>PLACE ORDER</span>
    </button>
  );
}
export default HeaderButton;
