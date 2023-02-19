import React, { useEffect } from "react";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { getRandomCocktails } from "../../store/actions/cocktails";

import classes from "./AvailableCocktails.module.css";

const Availablecocktails = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomCocktails());
  }, []);
  const cocktails = useSelector((state) => state.cocktails);

  let cocktailList = [];
  if (cocktails) {
    cocktailList = cocktails.map((item) => <p>{item.id}</p>);
  }
  
  return (
    <section className={classes.cocktails}>
      <Card>
        <ul>{cocktailList}</ul>
      </Card>
    </section>
  );
};

export default Availablecocktails;
