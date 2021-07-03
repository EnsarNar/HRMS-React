import { combineReducers } from "redux";
import favReducer from "./reducers/favReducer";


const rootReducer = combineReducers({
    favorites: favReducer
})



export default rootReducer;