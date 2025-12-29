import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./AppReducer";


const rootReducer = combineReducers(
    {data: appReducer}
)

export default rootReducer;