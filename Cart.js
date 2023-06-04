import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const itemInCart = [
    { id: "c2", dishIn: "Masala Dosa", quantity: "3", price: "120" },
  ].map((item) => <>{item.dishIn}</>);
  return (
    <Modal onHide={props.onHide}>
      {/* props.onHide is coming from the app which is use to hide the cart  */}
      {/* flow - Backdrop to Rendering in Modal - in Modal taking value from App  */}
      <div className={classes.item}>{itemInCart}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹360</span>
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
