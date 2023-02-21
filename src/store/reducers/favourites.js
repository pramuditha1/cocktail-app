import { ADD_FAVOUTITES } from "../../constants/actionType";

const favouritesReducer = (favourites = [], action) => {
  switch (action.type) {
    case ADD_FAVOUTITES: {
      const existingItemIndex = favourites.findIndex(
        (item) => item.id === action.payload.id
      );
      //get existing item
      const existingItem = favourites[existingItemIndex + 1];
      //updated favourite items array
      let updatedItems;
      if (existingItem) {
        //if existing item available update that with amount
        const updatedFavouriteItem = {
          ...existingItem,
          amount:
            parseInt(action.payload[0].amount) + parseInt(existingItem.amount),
        };
        updatedItems = [...favourites];
        updatedItems[existingItemIndex + 1] = updatedFavouriteItem;
      } else {
        //adding new items to favourite list
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
