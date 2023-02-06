import { ActionTypes } from "../interfaces/store";

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

export const updateAccentColor = (accentColor: string) => ({
  type: ActionTypes.updateAccentColor,
  payload: accentColor,
});

export const showProfile = () => ({ type: ActionTypes.showProfile });

export const showSidebar = () => ({ type: ActionTypes.showSidebar });
