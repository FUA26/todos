import { combineReducers } from "redux";
import MainReducer from "./mainReducer";
import StageReducer from "./stageReducer";


export default combineReducers({
    main: MainReducer,
    stage: StageReducer
});