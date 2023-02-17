import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";
import { ordersReducer } from "./orders";
import { tiesReducer } from "./ties";
import { langReducer } from "./lang";
import { myTiesReducer } from "./myTies";
import { myOrdersReducer } from "./myOrders";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
  ordersReducer,
  tiesReducer,
  langReducer,
  myTiesReducer,
  myOrdersReducer,
});

export default rootReducer;
