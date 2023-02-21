import React from "react";
import Modal from "../UI/Modal";
import classes from "./Favourites.module.css";
import { useDispatch, useSelector } from "react-redux";
import Item from './FavouriteItem/Item'

const Favourites = (props) => {
  const favouriteCocktails = useSelector((state) => state.favourites);
console.log("============= favouriteCocktails: ", favouriteCocktails)
  return (
    <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {favouriteCocktails.map((item) => (
                    <Item
                        item={item} 
                        onRemove={()=>{}}
                        onAdd={()=>{}}
                    />)
                )}
            </ul>
        </Modal>
  );
};

export default Favourites;
