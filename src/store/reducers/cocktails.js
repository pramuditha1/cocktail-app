import { FETCH_FIVE, SET_SEARCH_RESULTS, CLEAR_COCKTAILS } from '../../constants/actionType'

const cocktailsReducer = (cocktails = [], action) => {
    switch (action.type) {
        case FETCH_FIVE:
            return [
                ...action.payload
            ];
        case SET_SEARCH_RESULTS:
            return [
                ...action.payload
            ]
        case CLEAR_COCKTAILS: return []
        default:
            return cocktails;
    }
}

export default cocktailsReducer;