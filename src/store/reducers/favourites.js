import { ADD_FAVOUTITES } from '../../constants/actionType'

export default (favourites = [], action) => {
    switch (action.type) {
        case ADD_FAVOUTITES:
            return [...favourites, ...action.payload];
        
        default:
            return favourites;
    }
}