import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import stageReducer from "./stageReducer";


export default combineReducers({
    mainReducer,
    stageReducer
});