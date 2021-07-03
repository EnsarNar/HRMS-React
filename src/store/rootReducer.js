import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer";
import filterReducer from "./reducers/filterReducer";


const rootReducer = combineReducers({
    favorites: favReducer,
    filterValues: filterReducer
})



export default rootReducer;