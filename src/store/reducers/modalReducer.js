
import { modalState } from "../initialValues/modalState";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";


const initialValues = {
    modalState: modalState
};

export default function modalReducer(state = initialValues, { type, payload }) {

    switch (type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalState: { open: payload }
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalState: { open: payload }
            }
        default:
            return state
    }
}