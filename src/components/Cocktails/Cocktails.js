import React from "react";
import AvailableCocktails from "./AvailableCocktails/AvailableCocktails";
import SearchCocktails from "./Search/Search";

const Cocktails = () => {
  return (
    <>
      <SearchCocktails />
      <AvailableCocktails />
    </>
  );
};

export default Cocktails;
