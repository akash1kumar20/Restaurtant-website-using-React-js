import classNamees from "./Header.module.css";
import imgToUse from ".//nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <header className={classNamees.header}>
            <h1>The Lalit's</h1>
            <HeaderButton onclick={props.onShow} />
            {/* When HeaderButton is clicked we want to render onShow pointer which have the function to make cart visible. 
        Here onClick is custom name */}
          </header>
        </div>
      </nav>

      <div
        className={classNamees["main-image"]}
        //as it's a CSS file with - so we can't use it with a dot notation
      >
        <img src={imgToUse} alt="Table" />
      </div>
    </>
  );
};
export default Header;
