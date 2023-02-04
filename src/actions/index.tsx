import { ActionTypes } from "../interfaces/store";

export const updateFixedSidebar = (isSidebarFixed: boolean) => {
  return {
    type: ActionTypes.updateFixedSidebar,
    payload: isSidebarFixed,
  };
};

export const updateNightMode = (isNightMode: boolean) => {
  return {
    type: ActionTypes.updateNightMode,
    payload: isNightMode,
  };
};

export const updateSidebarAccentMode = (isSidebarAccentMode: boolean) => {
  return {
    type: ActionTypes.updateSidebarAccentMode,
    payload: isSidebarAccentMode,
  };
};

export const updateNavbarNightMode = (isNavbarNightMode: string) => {
  return {
    type: ActionTypes.updateNavbarNightMode,
    payload: isNavbarNightMode,
  };
};

export const updateAccentColor = (accentColor: string) => {
  return {
    type: ActionTypes.updateAccentColor,
    payload: accentColor,
  };
};

export const showProfile = () => {
  return {
    type: ActionTypes.showProfile,
  };
};

export const showSidebar = () => {
  return {
    type: ActionTypes.showSidebar,
  };
};
