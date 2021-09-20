import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer";
import filterReducer from "./reducers/filterReducer";
import percentReducer from "./reducers/percentReducer";
import employerUpdateReducer from "./reducers/employerUpdateReducer"



const rootReducer = combineReducers({
    favorites: favReducer,
    filterValues: filterReducer,
    progressPercent: percentReducer,
    schemas: employerUpdateReducer

})



export default rootReducer;