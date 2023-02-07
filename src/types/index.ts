import { ActionCreator, AnyAction } from "redux";

export type HeaderType = {
  accentColor: string;
  isNavbarNightMode: boolean;
};

export type SidebarType = {
  accentColor: string;
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
  isSidebarShow: boolean;
};

export type ProfileType = {
  accentColor: string;
  isProfileShow: boolean;
};

export type SwitchType = {
  action: ActionCreator<AnyAction>;
};

export type SidebarIconType = {
  color: string;
  type: string;
};
