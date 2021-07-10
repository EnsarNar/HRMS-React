import { ADD_NEW_FILTER, CLEAR_FILTER } from "../actions/filterActions";
import { filterValues } from "../initialValues/filters";
const initialState = {
    filterValues: filterValues
}

export default function filterReducer(state = initialState, { type, payload }) {
    // console.log({
    //     ...state,
    //     filterValues: payload
    // })
    switch (type) {
        case ADD_NEW_FILTER:
            return {
                ...state,
                filterValues: payload
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filterValues: payload
            }

        default:
            return state;
    }
}

