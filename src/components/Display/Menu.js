import classes from "./Menu.module.css";
import OptionsToEat from "../Meals/OptionsToEat";
import Summary from "./Summary";
const Menu = (props) => {
  return (
    <>
      <Summary />
      <div className={classes.menu}>
        <OptionsToEat />
      </div>
    </>
  );
};
export default Menu;
