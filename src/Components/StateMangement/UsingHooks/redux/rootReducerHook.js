import { combineReducers } from "redux";
import bookReducer from "./Book/bookReducer";

export const rootReducerHook = combineReducers({ book: bookReducer })