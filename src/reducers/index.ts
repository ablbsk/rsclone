import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";
import { ordersReducer } from "./orders";
import { langReducer } from "./lang";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
  ordersReducer,
  langReducer,
});

export default rootReducer;
