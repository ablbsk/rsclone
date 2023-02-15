import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";
import { ordersReducer } from "./orders";
import { tiesReducer } from "./ties";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
  ordersReducer,
  tiesReducer,
});

export default rootReducer;
