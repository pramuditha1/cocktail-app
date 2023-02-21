import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import classes from "./Item.module.css";

function Item1(props) {
  return (
    // <div className={classes.mainContainer}>
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
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </Box>
    </li>
    // </div>
  );
}

export default Item1;
