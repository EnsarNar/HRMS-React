import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer";
import filterReducer from "./reducers/filterReducer";
import percentReducer from "./reducers/percentReducer";




const rootReducer = combineReducers({
    favorites: favReducer,
    filterValues: filterReducer,
    progressPercent: percentReducer,


})



export default rootReducer;