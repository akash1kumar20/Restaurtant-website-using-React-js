import React from "react";
import classes from "./Item.module.css";
//the idea of this component is the to make input as a highly usable item that can be use any where in the system.
export default React.forwardRef(function Item(props, ref) {
  return (
    <div>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
        {/* spread operator helps to get every type of input(example, type='text') into the input field. */}
      </div>
    </div>
  );
});
