import { ActionCreator, AnyAction } from "redux";
import { ReactNode } from "react";

export type HeaderType = {
  accentColor: string;
  isNavbarNightMode: boolean;
  renderLinks: true;
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
