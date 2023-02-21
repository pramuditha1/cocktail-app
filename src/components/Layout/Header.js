import React from "react";
import cocktailBanner from "../../assets/cocktail-banner.jpg";
import FavouriteItemsButton from "./FavouriteItemsButton";
import classes from "./Header.module.css";

const Header = ({ onShowFavourites }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Cocktail</h1>
        <FavouriteItemsButton onClick={onShowFavourites} />
      </header>
      <div className={classes["main-image"]}>
        <img src={cocktailBanner} alt="cocktail banner" />
      </div>
    </>
  );
};

export default Header;
