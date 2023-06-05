import classes from "./AddItem.module.css";
import CartContext from "../../data_room/CartContext";
import { useContext } from "react";
const AddItem = (props) => {
  const cartCtx = useContext(CartContext);
  //a copy is added here of CartContext

  const countUpdate = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("quantity").value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
    // console.log(props.item);
    // console.log("Updating", cartCtx);
  };
  return (
    <>
      <form className={classes.add}>
        {console.log("See", cartCtx.items)}
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          defaultValue="1"
          max="5"
          min="1"
        ></input>
        <div>
          <button
            type="submit"
            className={classes.button}
            onClick={countUpdate}
          >
            +Add
          </button>
        </div>
      </form>
    </>
  );
};
export default AddItem;
