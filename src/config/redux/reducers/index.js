import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import stageReducer from "./stageReducer";
import formTodoReducer from "./formTodoReducer";
import formLoginReducer from "./formLoginReducer";
import { toastsReducer as toasts } from 'react-toastify-redux';


export default combineReducers({
    mainReducer,
    stageReducer,
    formTodoReducer,
    formLoginReducer,
    toasts
});