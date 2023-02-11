import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";

const rootReducer = combineReducers({
  appInterface,
  auth,
});

export default rootReducer;
