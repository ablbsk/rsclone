import { ActionTypes } from "../interfaces/store";
import { ILogin } from "../interfaces/login";

export const updateFixedSidebar = (isSidebarFixed: boolean) => ({
  type: ActionTypes.updateFixedSidebar,
  payload: isSidebarFixed,
});

export const updateNightMode = (isNightMode: boolean) => ({
  type: ActionTypes.updateNightMode,
  payload: isNightMode,
});

export const updateSidebarAccentMode = (isSidebarAccentMode: boolean) => ({
  type: ActionTypes.updateSidebarAccentMode,
  payload: isSidebarAccentMode,
});

export const updateNavbarNightMode = (isNavbarNightMode: string) => ({
  type: ActionTypes.updateNavbarNightMode,
  payload: isNavbarNightMode,
});

export const updateAccentColor = (accentColor: {
  static: string;
  hover: string;
}) => ({
  type: ActionTypes.updateAccentColor,
  payload: accentColor,
});

export const resetInterfaceToDefault = () => ({
  type: ActionTypes.resetInterfaceToDefault,
});

export const showProfile = () => ({ type: ActionTypes.showProfile });

export const showSidebar = () => ({ type: ActionTypes.showSidebar });

export const registration = () => ({ type: ActionTypes.registration });

export const authorization = (user: ILogin, isLogin: boolean) => ({
  type: ActionTypes.authorization,
  payload: { user, isLogin },
});
