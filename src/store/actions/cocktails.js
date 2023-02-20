import * as api from "../../api";
import { FETCH_FIVE, ADD_FAVOUTITES } from "../../constants/actionType";

export const getRandomCocktails = () => async (dispatch) => {
  try {
    const data = await fetchRandomCocktails();
    // console.log("===================== data ========= : ", data);
    dispatch({ type: FETCH_FIVE, payload: [...data] });
  } catch (error) {
    console.log(error.message);
  }
};

const fetchRandomCocktails = async () => {
  //create promises array with five requests and wait till all requests resolved
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(api.fetchRandomCocktails());
  }
  const responses = await Promise.all(promises);
  const data = await Promise.all(
    responses.map((res) => {
      let cocktail = {
        id: res.data.drinks[0].idDrink,
        category: res.data.drinks[0].strCategory,
        image: res.data.drinks[0].strDrinkThumb,
        name: res.data.drinks[0].strDrink,
      };
      //return res.data.drinks[0];
      return cocktail;
    })
  );
  return data;
};

export const addToFavourites = (cocktail) => async (dispatch) => {
  try {
    dispatch({ type: ADD_FAVOUTITES, payload: [cocktail] })
  } catch (error) {
    console.log("action error add favourites : ", error.message)
  }
}
