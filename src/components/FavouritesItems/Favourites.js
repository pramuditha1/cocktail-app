import React from "react";
import Modal from "../UI/Modal";
import { Box } from "@material-ui/core";
import classes from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from "./FavouriteItem/Item";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    maxHeight: "60vh",
    overflow: "auto",
  },
}));

const Favourites = (props) => {
  const favouriteCocktails = useSelector((state) => state.favourites);
  const modalClasses = useStyles();
  return (
    <Modal onClose={props.onClose}>
      <Box className={modalClasses.modalContent}>
        <ul className={classes["cart-items"]}>
          {favouriteCocktails.map((item) => (
            <Item item={item} onRemove={() => {}} onAdd={() => {}} />
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default Favourites;
