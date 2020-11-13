// root reducer를 만들기 위한 combineReducer
import { combineReducers } from "redux";
import uploadReducer from "./uploadReducer";

export default combineReducers({ uploadReducer });
