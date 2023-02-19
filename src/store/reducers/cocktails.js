import { FETCH_ALL } from '../../constants/actionType'

export default (cocktails = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return [
                ...action.payload
            ];
        
        default:
            return cocktails;
    }
}