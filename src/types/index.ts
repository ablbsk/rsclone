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
  isProfileShow: boolean;
};

export type SwitchType = {
  action: ActionCreator<AnyAction>;
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
}