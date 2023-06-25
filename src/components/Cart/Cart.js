import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../data_room/CartContext";
import imgToUse from "../UI/4e95ff2406e7914e70cbbba6dd9c51d2.jpg";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const showNow = cartCtx.items.length > 0;
  const decrease = (id) => {
    cartCtx.removeItem(id);
  };
  const increase = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
    //we are just passing the item and quantity when plus button is clicked, rest of the things is handled by addedInCart function of the DataProvider component.
    //here we specify the quantity, because we want whenever plus button is clicked, it should increase by one, if we don't do this...it will add quanitity into the quantity.
    //Example - in the latestSnapShot it have two quantity, then it will added 2 more quantity, when we click on plus button.
  };

  const items = (
    <ul className={classes.item}>
      {cartCtx.items.map((item) => (
        <>
          <li className={classes.nameTag}>{item.name}</li>
          <div className={classes.priceTag}>
            <div className={classes.price}>₹{item.price}</div>
            <div className={classes.quantity}> x {item.quantity}</div>
          </div>
          <div className={classes.btn}>
            <button
              className={classes.min}
              onClick={decrease.bind(null, item.id)}
            >
              -
            </button>
            <span className={classes.styleOutput}>{item.quantity}</span>
            <button
              className={classes.plus}
              onClick={increase.bind(null, item)}
              //to ensure that button will receive the item.
            >
              +
            </button>
          </div>
        </>
      ))}
    </ul>
  );

  const total = cartCtx.items.reduce((initialPrice, item) => {
    return item.price * item.quantity + initialPrice;
  }, 0);

  return (
    <Modal onHide={props.onHide}>
      {/* props.onHide is coming from the app which is use to hide the cart  */}
      {/* flow - Backdrop to Rendering in Modal - in Modal taking value from App  */}
      <img src={imgToUse} alt="Logo" className={classes.img}></img>
      <div>{items}</div>
      <div>
        <span className={classes.heading}>Total Amount</span>
        <span className={classes.headingPrice}>₹ {total}</span>
      </div>

      <div className={classes.box}>
        <button type="submit" className={classes.close} onClick={props.onHide}>
          {/* onHide is the pointer coming from the App component which has the function to close the cart on the click. */}
          Close
        </button>
        {showNow && (
          <button type="submit" className={classes.order}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
