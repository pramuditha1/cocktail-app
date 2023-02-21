import { FETCH_FIVE, SEARCH_SUCCESS } from "../../constants/actionType";

const cocktailsReducer = (cocktails = [], action) => {
  switch (action.type) {
    case FETCH_FIVE:
      return [...action.payload];
    case SEARCH_SUCCESS:
      return [...action.payload];
    default:
      return cocktails;
  }
};

export default cocktailsReducer;
