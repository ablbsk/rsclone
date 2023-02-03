import { ActionTypes } from "../interfaces/store";

export const updateFixedSidebar = (isSidebarFixed: boolean) => {
  return {
    type: ActionTypes.updateFixedSidebar,
    payload: isSidebarFixed,
  };
};

export const updateAccentColor = (color: string) => {
  return {
    type: ActionTypes.updateAccentColor,
    payload: color,
  };
};
