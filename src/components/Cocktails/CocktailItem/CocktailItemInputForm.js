import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../UI/Input";
import { addToFavourites } from "../../../store/actions/cocktails";
import classes from "./CocktailItemInputForm.module.css";

const CocktailItemInputForm = (props) => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToFavourites(props.cocktail));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button type="submit">Add</button>
    </form>
  );
};

export default CocktailItemInputForm;
