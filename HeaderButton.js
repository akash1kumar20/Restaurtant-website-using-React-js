import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderButton(props) {
  return (
    <button className={classes.button} onClick={props.onclick}>
      {/* Here props.onclick is the function coming from the Header component */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
}
export default HeaderButton;
