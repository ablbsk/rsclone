import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
});

export default rootReducer;
