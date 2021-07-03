import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actions/favActions.js"
import { favoriteItems } from "../initialValues/favoriteItems";


const initialState = {

    favoriteItems: favoriteItems,
};


export default function favReducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_TO_FAVORITES:
            let advertisement = state.favoriteItems.find(f => f.jobAdvertisement.id === payload.id);
            if (advertisement) {
                console.log("Bu ilan zaten favorilere eklenmiş !");
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, { jobAdvertisement: payload }]
                }
            }

        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(f => f.jobAdvertisement.id !== payload.id)
            }
        default:
            return state;
    }

}