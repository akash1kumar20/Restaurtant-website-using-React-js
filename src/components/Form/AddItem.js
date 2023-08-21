import classes from "./AddItem.module.css";
import Item from "../UI/Item";
//Item is a re-usable component
import { useState, useRef } from "react";
const AddItem = (props) => {
  const quantityRef = useRef();
  //to always get latest quantity.
  const [quantityIsValid, setQuantity] = useState(true);

  const countUpdate = (event) => {
    event.preventDefault();
    const quantity = quantityRef.current.value;
    let finalQuantity = +quantity;
    //converting into a number
    // console.log("Check the quantity", finalQuantity);

    if (finalQuantity < 1 || finalQuantity > 5) {
      setQuantity(false);
      return;
    }

    props.onAdd(finalQuantity);
    //our cart item need more data like id, price or name, not only quantity that's why we're forwarding it to operationsIterarting component.
  };

  return (
    <>
      <form className={classes.add} onSubmit={countUpdate}>
        <Item
          ref={quantityRef}
          label="Quantity"
          input={{
            id: "quantity",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
          // this is resuable input and label, taking perameters as object
        />
        <div>
          <button type="submit" className={classes.button}>
            +Add
          </button>
        </div>
        {!quantityIsValid && (
          <p>Please don't add item more than 5 and less then 1</p>
        )}
      </form>
    </>
  );
};
export default AddItem;
