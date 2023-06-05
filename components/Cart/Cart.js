import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../data_room/CartContext";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const items = (
    <ul className={classes.item}>
      {cartCtx.items.map((item) => (
        <>
          <li className={classes.nameTag}>{item.name}</li>
          <li className={classes.priceTag}>
            {item.quantity} * {item.price}
          </li>
        </>
      ))}
    </ul>
  );
  const total = cartCtx.items.reduce((initialPrice, item) => {
    return initialPrice + item.price;
  }, 0);

  return (
    <Modal onHide={props.onHide}>
      {/* props.onHide is coming from the app which is use to hide the cart  */}
      {/* flow - Backdrop to Rendering in Modal - in Modal taking value from App  */}
      <div className={classes.item}>
        <div className={classes.heading}>Items :</div>
        <div className={classes.headingPrice}>Price:</div>
      </div>
      <div className={classes.item}>{items}</div>
      <div className={classes.item}>
        <span className={classes.heading}>Total Amount</span>
        <span className={classes.headingPrice}>₹ {total}</span>
      </div>
      <div className={classes.box}>
        <button type="submit" className={classes.close} onClick={props.onHide}>
          {/* onHide is the pointer coming from the App component which has the function to close the cart on the click. */}
          Close
        </button>
        <button type="submit" className={classes.order}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
