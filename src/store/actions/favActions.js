export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";


export function addToFavorites(jobAdvertisement) {
    return {
        type: ADD_TO_FAVORITES,
        payload: jobAdvertisement
    }
}

export function deleteFromFavorites(jobAdvertisement) {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: jobAdvertisement
    }
}