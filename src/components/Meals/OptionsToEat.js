import Card from "../UI/Card";
import OptionsIterating from "./OptionsIterating";
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
    extraItem: "Green Chutney",
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
  const optionsList = OPTIONS.map((meal) => (
    <OptionsIterating
      key={meal.id}
      id={meal.id}
      name={meal.dish}
      price={meal.price}
      free={meal.extraItem}
    />
  ));

  return (
    <section>
      <Card>{optionsList}</Card>
    </section>
  );
};
export default OptionsToEat;
