
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";


export const openModalPage = (value) => {
    return {
        type: OPEN_MODAL,
        payload: value
    }
}
export const closeModalPage = (value) => {
    return {
        type: CLOSE_MODAL,
        payload: value
    }
}