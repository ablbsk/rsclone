import { ActionCreator, AnyAction } from "redux";

export type HeaderType = {
  accentColor: string;
  isNavbarNightMode: boolean;
};

export type SidebarType = {
  accentColor: string;
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
};

export type ProfileType = {
  accentColor: string;
};

export type SwitchType = {
  action: ActionCreator<AnyAction>;
};
