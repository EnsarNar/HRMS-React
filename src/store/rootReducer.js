import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer";
import filterReducer from "./reducers/filterReducer";
import percentReducer from "./reducers/percentReducer";
import modalReducer from "./reducers/modalReducer";



const rootReducer = combineReducers({
    favorites: favReducer,
    filterValues: filterReducer,
    progressPercent: percentReducer,
    modalValue: modalReducer

})



export default rootReducer;