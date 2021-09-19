import EmployerUpdateSchemaService from "../../services/employerUpdateSchemaService"
import { toast } from "react-toastify";

export const ADD_NEW_SCHEMA_TRUE = "ADD_NEW_SCHEMA_TRUE";
export const ADD_NEW_SCHEMA_FALSE = "ADD_NEW_SCHEMA_FALSE";
export const REMOVE_SCHEMA_TRUE = "REMOVE_SCHEMA_TRUE";
export const REMOVE_SCHEMA_FALSE = "REMOVE_SCHEMA_FALSE";

let employerUpdateSchemaService = new EmployerUpdateSchemaService();

export const addSchema = (schema) => async (dispatch) => {

    await employerUpdateSchemaService
        .addSchema(schema)
        .then(result =>
            dispatch({
                type: ADD_NEW_SCHEMA_TRUE,
                payload: result.data.data,
            })
        )
        .catch(err =>
            dispatch({
                type: ADD_NEW_SCHEMA_FALSE,
                payload: "An  error occured.",
            }))

};
export const removeSchema = (schemaId) => async (dispatch) => {

    await employerUpdateSchemaService
        .removeSchema(schemaId)
        .then(result =>
            dispatch({
                type: REMOVE_SCHEMA_TRUE,
                payload: schemaId,
            })
        )
        .catch(err =>
            dispatch({
                type: REMOVE_SCHEMA_FALSE,
                payload: "An error occured.",
            }))
};
// export const removeSchema = () => async(dispatch) =>{

//     await employerUpdateSchemaService
//     .removeSchema
// },
