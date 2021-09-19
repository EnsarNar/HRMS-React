
import { ADD_NEW_SCHEMA_TRUE, ADD_NEW_SCHEMA_FALSE, REMOVE_SCHEMA_TRUE, REMOVE_SCHEMA_FALSE } from "../actions/employerUpdateActions";
import { employerUpdateSchemas } from "../initialValues/employerUpdateSchemas";

const initialState = {
    employerUpdateSchemas: employerUpdateSchemas
}

export default function employerUpdateReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_NEW_SCHEMA_TRUE:
            return {
                ...state,
                employerUpdateSchemas: [...employerUpdateSchemas, { updateValue: payload }]

            }
        case ADD_NEW_SCHEMA_FALSE:
            return {
                ...state,
                message: payload
            }

        case REMOVE_SCHEMA_TRUE:
            return {
                ...state,
                employerUpdateSchemas: [...state.employerUpdateSchemas.filter(schema => schema.id !== payload)]
            }

        case REMOVE_SCHEMA_FALSE:
            return {
                ...state,
                message: payload
            }
        default:
            return state;
    }
};