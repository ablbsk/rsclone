import { ActionTypes, IAppInterface } from "../interfaces/store";
import { AnyAction } from "redux";
import { accentColors } from "../data/constants";
import { ReactNode } from "react";

const initialState: IAppInterface = {
  isSidebarFixed: false,
  isNightMode: false,
  isSidebarAccentMode: false,
  isNavbarNightMode: false,
  isProfileShow: false,
  isSidebarShow: false,
  accentColor: accentColors.default.static,
  renderLinks: true,
};

export const appInterface = (
  state: IAppInterface = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.updateFixedSidebar:
      return {
        ...state,
        isSidebarFixed: action.payload,
      };

    case ActionTypes.updateNightMode:
      return {
        ...state,
        isNightMode: action.payload,
      };

    case ActionTypes.updateSidebarAccentMode:
      return {
        ...state,
        isSidebarAccentMode: action.payload,
      };

    case ActionTypes.updateNavbarNightMode:
      return {
        ...state,
        isNavbarNightMode: action.payload,
      };

    case ActionTypes.updateAccentColor:
      return {
        ...state,
        accentColor: action.payload,
      };

    case ActionTypes.showProfile:
      return {
        ...state,
        isProfileShow: !state.isProfileShow,
      };

    case ActionTypes.showSidebar:
      return {
        ...state,
        isSidebarShow: !state.isSidebarShow,
      };

    default:
      return state;
  }
};
