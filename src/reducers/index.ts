import { AnyAction, combineReducers } from "redux";
import { ActionTypes, ITest } from "../interfaces/store";

const initialState: ITest = {
  interface: {
    isSidebarFixed: false,
    accentColor: "#4788ff",
  },
};

const test = (state: ITest = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.updateFixedSidebar:
      return {
        ...state,
        interface: {
          ...state.interface,
          isSidebarFixed: action.payload,
        },
      };
    case ActionTypes.updateAccentColor:
      return {
        ...state,
        interface: {
          ...state.interface,
          accentColor: action.payload,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
