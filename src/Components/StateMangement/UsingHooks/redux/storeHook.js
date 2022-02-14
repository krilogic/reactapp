import { createStore } from "redux";
import { rootReducerHook } from "./rootReducerHook";

export const storeHook = createStore(rootReducerHook)