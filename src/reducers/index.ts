import { combineReducers } from "redux";
import { appInterface } from "./appInterface";
import { auth } from "./auth";
import { usersReducer } from "./users";
import { ordersReducer } from "./orders";
import { tiesReducer } from "./ties";
import { addTieReducer } from "./addTie";
import { langReducer } from "./lang";
import { buyTieReducer } from "./buyTie";

const rootReducer = combineReducers({
  appInterface,
  auth,
  usersReducer,
  ordersReducer,
  tiesReducer,
  addTieReducer,
  langReducer,
  buyTieReducer,
});

export default rootReducer;
