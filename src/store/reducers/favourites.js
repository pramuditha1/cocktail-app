import { ADD_FAVOUTITES } from "../../constants/actionType";
import { findIndex } from "lodash";

const favouritesReducer = (favourites = [], action) => {
  switch (action.type) {
    case ADD_FAVOUTITES: {
      const existingItemIndex = findIndex(favourites, {
        id: action.payload[0]?.id,
      });
      //get existing item
      const existingItem = favourites[existingItemIndex];
      //updated items
      let updatedItems;
      //if existing item available update that with amount
      if (existingItem) {
        const updatedFavouriteItem = {
          ...existingItem,
          amount:
            parseInt(action.payload[0].amount) + parseInt(existingItem.amount),
        };
        updatedItems = [...favourites];
        updatedItems[existingItemIndex] = updatedFavouriteItem;
      } else {
        updatedItems = favourites.concat(action.payload);
      }
      return [...updatedItems];
    }
    // return [...favourites, ...action.payload];
    default:
      return favourites;
  }
};

export default favouritesReducer;