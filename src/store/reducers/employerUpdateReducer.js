
import { ADD_NEW_SCHEMA, REMOVE_SCHEMA } from "../actions/employerUpdateActions";
import { employerUpdateSchemas } from "../initialValues/employerUpdateSchemas";

const initialState = {
    employerUpdateSchemas: employerUpdateSchemas
}

export default function employerUpdateReduver(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_NEW_SCHEMA:
            return {
                ...state,
                employerUpdateSchemas: [...employerUpdateSchemas, { updateValue: payload }]

            }

        case REMOVE_SCHEMA:
            return {
                ...state,
                employerUpdateSchemas: state.employerUpdateSchemas.filter(f => f.updateValue.id !== payload.id)
            }
        default:
            return state;
    }
};