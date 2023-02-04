export interface IStore {
  test: ITest;
}

export interface ITest {
  interface: {
    isSidebarFixed: boolean;
    isNightMode: boolean;
    isSidebarAccentMode: boolean;
    isNavbarNightMode: boolean;
    isProfileShow: boolean;
    isSidebarShow: boolean;
    accentColor: string;
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
}
