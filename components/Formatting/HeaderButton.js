import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderButton() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
}
export default HeaderButton;
