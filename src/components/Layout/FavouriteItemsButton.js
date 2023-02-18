import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import classes from "./FavouriteItemsButton.module.css";

const FavouriteItemsButton = (props) => {
  const noItems = 4;

  return (
    <Button className={classes.button} startIcon={<FavoriteIcon />}>
      Favourite Items {noItems}
    </Button>
  );
};

export default FavouriteItemsButton;
