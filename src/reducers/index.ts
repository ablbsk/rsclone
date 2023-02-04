import { AnyAction, combineReducers } from "redux";
import { ActionTypes, ITest } from "../interfaces/store";

const initialState: ITest = {
  interface: {
    isSidebarFixed: false,
    isNightMode: false,
    isSidebarAccentMode: false,
    isNavbarNightMode: false,
    isProfileShow: false,
    isSidebarShow: false,
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

    case ActionTypes.updateNightMode:
      return {
        ...state,
        interface: {
          ...state.interface,
          isNightMode: action.payload,
        },
      };

    case ActionTypes.updateSidebarAccentMode:
      return {
        ...state,
        interface: {
          ...state.interface,
          isSidebarAccentMode: action.payload,
        },
      };

    case ActionTypes.updateNavbarNightMode:
      return {
        ...state,
        interface: {
          ...state.interface,
          isNavbarNightMode: action.payload,
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

    case ActionTypes.showProfile:
      return {
        ...state,
        interface: {
          ...state.interface,
          isProfileShow: !state.interface.isProfileShow,
        },
      };

    case ActionTypes.showSidebar:
      return {
        ...state,
        interface: {
          ...state.interface,
          isSidebarShow: !state.interface.isSidebarShow,
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
