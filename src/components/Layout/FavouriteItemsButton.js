import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import classes from "./FavouriteItemsButton.module.css";
import { useSelector } from "react-redux";

const FavouriteItemsButton = ({ onClick }) => {
  const favourites =  useSelector((state) => state.favourites)
  let noItems = 0;
  favourites.map(favourite => noItems += parseInt(favourite.amount))

  return (
    <Button
      className={classes.button}
      startIcon={<FavoriteIcon />}
      onClick={onClick}
    >
      Favourite Items { noItems }
    </Button>
  );
};

export default FavouriteItemsButton;
