import { applyMiddleware, legacy_createStore } from "redux";
import {thunk} from "redux-thunk"
import { rootReducer } from "./Reducer";


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

// store.subscribe(()=>console.log(store.getState()))