import React, { useEffect} from "react";
import Card from "../UI/Card";
import { useDispatch } from 'react-redux';
import { getRandomCocktails } from '../../store/actions/cocktails'

import classes from "./AvailableCocktails.module.css";

const cocktails = [
  {
    idDrink: "11024",
    strDrink: "Almond Joy",
    strDrinkAlternate: null,
    strTags: null,
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/xutuqs1483388296.jpg",
    strIngredient1: "Amaretto",
    strIngredient2: "Creme de Cacao",
    strIngredient3: "Light cream",
    dateModified: "2017-01-02 20:18:16",
  },
];

const Availablecocktails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomCocktails())
  }, [])
  
  const cocktailList = cocktails.map((item) => (
    <p>{item.strDrink}</p>
  ));
  return (
    <section className={classes.cocktails}>
      <Card>
        <ul>{cocktailList}</ul>
      </Card>
    </section>
  );
};

export default Availablecocktails;
