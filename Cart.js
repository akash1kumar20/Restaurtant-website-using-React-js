import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const itemInCart = [
    { id: "c2", dishIn: "Masala Dosa", quantity: "3", price: "120" },
  ].map((item) => <>{item.dishIn}</>);
  return (
    <Modal>
      <div className={classes.item}>{itemInCart}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹360</span>
      </div>
      <div className={classes.box}>
        <button type="submit" className={classes.close}>
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
