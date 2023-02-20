import { FETCH_FIVE } from '../../constants/actionType'

export default (cocktails = [], action) => {
    switch (action.type) {
        case FETCH_FIVE:
            return [
                ...action.payload
            ];
        
        default:
            return cocktails;
    }
}