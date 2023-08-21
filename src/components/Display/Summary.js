import classes from "./Summary.module.css";
function Summary() {
  return (
    <div className="col-md-8">
      <div className={classes.summary}>
        <h1>Delicious Food Delivered To you</h1>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals cooked with high-quality ingredients, just-in-time and
          of course by experienced chef!
        </p>
      </div>
    </div>
  );
}
export default Summary;
