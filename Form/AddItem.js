import classes from "./AddItem.module.css";
const AddItem = () => {
  return (
    <>
      <form className={classes.add}>
        <label htmlFor="quantity">Amount</label>
        <input type="number" id="quantity" defaultValue="1"></input>
        <div>
          <button type="submit" className={classes.button}>
            +Add
          </button>
        </div>
      </form>
    </>
  );
};
export default AddItem;
