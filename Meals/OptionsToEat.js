import classes from "./OptionsToEat.module.css";
import Card from "../UI/Card";
import AddItem from "../Form/AddItem";
const OPTIONS = [
  {
    id: "m1",
    dish: "Rajma Chawal",
    extraItem: "Salad and Pickle",
    price: 250,
  },
  {
    id: "m2",
    dish: "Masala Dosa",
    extraItem: "Sambhar & Chutney",
    price: 120,
  },
  {
    id: "m3",
    dish: "Dam Aloo",
    extraItem: "With Green Chutney",
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
        <>
          <div className={classes.name}>Item__ {meal.dish}</div>
          <div className={classes.free}>With__ {meal.extraItem}</div>
          <div className={classes.price}>Price__ ₹{meal.price}</div>
          <div>
            <AddItem />
          </div>
        </>
      ))}
    </Card>
  );
};
export default OptionsToEat;
