import classes from "./OptionsToEat.module.css";
import Card from "../UI/Card";
const OPTIONS = [
  {
    id: "m1",
    dish: "Rajma Chawal",
    extraItem: "Salad and Pickle",
    price: 250,
  },
  {
    id: "m2",
    dish: "Dosa",
    extraItem: "Masala Dosa with sambhar",
    price: 120,
  },
  {
    id: "m3",
    dish: "Dam Aloo",
    extraItem: "With Green Chutney and Sirka Piyaz",
    price: 220,
  },
  {
    id: "m4",
    dish: "White Sause Pasta",
    extraItem: "Garlic Bread",
    price: 500,
  },
];
const OptionsToEat = () => {
  return (
    <Card>
      {OPTIONS.map((meal) => (
        <div>
          <div className={classes.name}>Item__ {meal.dish}</div>
          <div className={classes.free}>Also in the box__ {meal.extraItem}</div>
          <div className={classes.price}>Price__ ₹{meal.price}</div>
        </div>
      ))}
    </Card>
  );
};
export default OptionsToEat;
