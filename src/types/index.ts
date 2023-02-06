import { ActionCreator, AnyAction } from "redux";

export type HeaderType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type SidebarType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
  isSidebarShow: boolean;
};

export type ProfileType = {
  accentColor: {
    static: string;
    hover: string;
  };
  isNightMode: boolean;
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow: boolean;
};

export type SwitchType = {
  action: ActionCreator<AnyAction>;
  isChecked: boolean;
  accentColor: {
    static: string;
    hover: string;
  };
};

export type SidebarIconType = {
  color: string;
  type: string;
};

export type HoverType = {
  children: JSX.Element;
};
