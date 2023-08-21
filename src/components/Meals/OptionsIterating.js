import React, { useContext } from "react";
import AddItem from "../Form/AddItem";
import classes from "./OptionsIterating.module.css";
import CartContext from "../../data_room/CartContext";
const OptionsIterating = (props) => {
  const cartCtx = useContext(CartContext);

  const addQuantity = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });

    //using addItem function to update the other value of the item
  };
  // console.log("testing", cartCtx);
  return (
    <div className="row border">
      <div className="col-6 mt-2 mb-2 p-2 ">
        <h4 className={classes.name}>Item__{props.name}</h4>
        <div className={classes.free}>In the box__{props.free}</div>
        <div className={classes.price}>Price__{props.price}</div>
      </div>
      <div className="col-6 align-items-end mt-2 mb-2 p-2 ">
        {/* {console.log("Hey check the data", props)} */}
        <AddItem onAdd={addQuantity} />
      </div>
    </div>
  );
};

export default OptionsIterating;
