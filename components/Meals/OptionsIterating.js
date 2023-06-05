import AddItem from "../Form/AddItem";
import classes from "./OptionsIterating.module.css";

const OptionsIterating = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.name}>Item__{props.name}</div>
      <div className={classes.free}>In the box__{props.free}</div>
      <div className={classes.price}>Price__{props.price}</div>
      <div>
        {/* {console.log("Hey check the data", props)} */}
        <AddItem id={props.id} item={props} />
      </div>
    </div>
  );
};

export default OptionsIterating;
