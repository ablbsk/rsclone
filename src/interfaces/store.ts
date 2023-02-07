export interface IStore {
  appInterface: IAppInterface;
}

export interface IAppInterface {
  isSidebarFixed: boolean;
  isNightMode: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow: boolean;
  isSidebarShow: boolean;
  accentColor: string;
}

export enum ActionTypes {
  updateFixedSidebar = "UPDATE_FIXED_SIDEBAR",
  updateNightMode = "UPDATE_NIGHT_MODE",
  updateSidebarAccentMode = "UPDATE_SIDEBAR_ACCENT_MODE",
  updateAccentColor = "UPDATE_ACCENT_COLOR",
  updateNavbarNightMode = "UPDATE_NAVBAR_NIGHT_MODE",
  showProfile = "SHOW_PROFILE",
  showSidebar = "SHOW_SIDEBAR",
  login = "LOGIN",
  authorization = "AUTHORIZATION",
}

export type User = {
  email: string;
  role: string;
};

export interface ILogin {
  user: User;
  isLogin: boolean;
}
