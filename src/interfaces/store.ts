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
  accentColor: {
    static: string;
    hover: string;
  };
}

export interface IAppInterfaceLocalStorage {
  isSidebarFixed: boolean;
  isNightMode: boolean;
  isSidebarAccentMode: boolean;
  isNavbarNightMode: boolean;
  isProfileShow?: boolean;
  isSidebarShow?: boolean;
  accentColor: {
    static: string;
    hover: string;
  };
}

export enum ActionTypes {
  updateFixedSidebar = "UPDATE_FIXED_SIDEBAR",
  updateNightMode = "UPDATE_NIGHT_MODE",
  updateSidebarAccentMode = "UPDATE_SIDEBAR_ACCENT_MODE",
  updateAccentColor = "UPDATE_ACCENT_COLOR",
  updateNavbarNightMode = "UPDATE_NAVBAR_NIGHT_MODE",
  showProfile = "SHOW_PROFILE",
  showSidebar = "SHOW_SIDEBAR",
  resetInterfaceToDefault = "RESET_INTERFACE_TO_DEFAULT",
}
