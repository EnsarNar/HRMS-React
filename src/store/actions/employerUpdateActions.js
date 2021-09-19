
export const ADD_NEW_SCHEMA = "ADD_NEW_SCHEMA";
export const REMOVE_SCHEMA = "REMOVE_SCHEMA";

export function addSchema(schema) {
    return {
        type: ADD_NEW_SCHEMA,
        payload: schema
    }
}
export function removeSchema(schema) {
    return {
        type: REMOVE_SCHEMA,
        payload: schema
    }
}