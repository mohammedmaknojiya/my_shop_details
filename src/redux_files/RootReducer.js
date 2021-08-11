import { combineReducers } from "redux";
import delUpdReducer from "./Reducer";


export const RootReducer = combineReducers({
    delUpdReducer: delUpdReducer
})

