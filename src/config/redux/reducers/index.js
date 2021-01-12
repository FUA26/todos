import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import stageReducer from "./stageReducer";
import formTodoReducer from "./formTodoReducer";


export default combineReducers({
    mainReducer,
    stageReducer,
    formTodoReducer
});