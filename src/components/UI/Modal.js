import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import imgToUSe from "./popular-indian-dishes-blogs.png";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <img src={imgToUSe} className={classes.img} alt="BackDrop Image"></img>
    </div>
  );
  //Backdrop is using to give the styles to the item which is currently at background of the Cart.
  // Here props.onClose holds the value which is passing while rendering the backdrop component
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onHide} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
