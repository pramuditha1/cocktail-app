import * as api from '../../api'
import { FETCH_ALL } from '../../constants/actionType'

export const getRandomCocktails = () => async (dispatch) => {
    try {
        const {data} = await api.fetchRandomCocktails();
        console.log(data)
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}