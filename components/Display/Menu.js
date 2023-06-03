import classes from "./Menu.module.css";
import OptionsToEat from "../Meals/OptionsToEat";
const Menu = () => {
  return (
    <div className={classes.menu}>
      <OptionsToEat />
    </div>
  );
};
export default Menu;
