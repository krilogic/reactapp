import { createStore } from "redux";
import userReducer from "./userReducer";

export const userStore = createStore(userReducer)