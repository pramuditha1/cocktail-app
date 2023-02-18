import React from "react";
import Modal from "../UI/Modal";
import classes from "./Favourites.module.css";

const Favourites = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["Favourites-items"]}></ul>
      <div className={classes.total}>
        <span>Item Name</span>
        <span>item price</span>
      </div>
    </Modal>
  );
};

export default Favourites;
