import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./Item.module.css";
import { useDispatch } from "react-redux";
import {
  addOneToFavouriteItem,
  removeOneFromFavouriteItem,
} from "../../../store/actions/cocktails";

function Item(props) {
  const dispatch = useDispatch();

  const handleOneItemRemove = (e) => {
    e.preventDefault();
    console.log(props.item.id);
    dispatch(removeOneFromFavouriteItem(props.item.id));
  };

  const handleOneItemAdd = (e) => {
    e.preventDefault();
    dispatch(addOneToFavouriteItem(props.item.id));
  };

  return (
    <li className={classes["item"]}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h2>{props.item.name}</h2>
          </Grid>
          <Grid item xs={2}>
            <span className={classes.category}>{props.item.category}</span>
          </Grid>
          <Grid item xs={2}>
            <span className={classes.amount}>{props.item.amount}</span>
          </Grid>
          <Grid item xs={4}>
            <img src={props.item.image} alt={props.item.image} />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <div className={classes.actions}>
          <button onClick={handleOneItemRemove}>-</button>
          <button onClick={handleOneItemAdd}>+</button>
        </div>
      </Box>
    </li>
  );
}

export default Item;
