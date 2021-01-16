import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import stageReducer from "./stageReducer";
import formTodoReducer from "./formTodoReducer";
import formLoginReducer from "./formLoginReducer";


export default combineReducers({
    mainReducer,
    stageReducer,
    formTodoReducer,
    formLoginReducer
});