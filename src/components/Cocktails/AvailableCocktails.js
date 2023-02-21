import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomCocktails } from "../../store/actions/cocktails";
import CocktailItem from "./CocktailItem/CocktailItem";
import classes from "./AvailableCocktails.module.css";
import Card from "../UI/Card";
import Button from "@mui/material/Button";
import { Grid } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";
import Typography from "@mui/material/Typography";

const CardList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomCocktails());
  }, []);
  const cocktails = useSelector((state) => state.cocktails);

  const refreshHome = (e) => {
    e.preventDefault();
    cocktails && dispatch(getRandomCocktails());
  };

  return (
    <section className={classes.cocktails}>
      <Card>
        <div className={classes.buttonHeader}>
          <Button
            className={classes.button}
            startIcon={<RefreshIcon />}
            onClick={refreshHome}
          >
            <Typography color="text.white">Refresh</Typography>
          </Button>
        </div>
        <Grid container spacing={1}>
          {cocktails &&
            cocktails.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CocktailItem key={item.id} cocktail={item} />
              </Grid>
            ))}
          {cocktails.length <= 0 && (
            <Typography variant="body2" color="text.secondary">
              No cocktails related to your search. Press Refresh button to get
              random cocktails...
            </Typography>
          )}
        </Grid>
      </Card>
    </section>
  );
};

export default CardList;
