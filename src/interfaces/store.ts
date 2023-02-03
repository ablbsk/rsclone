export interface IStore {
  test: {
    interface: {
      isSidebarFixed: boolean;
      accentColor: string;
    };
  };
}

export interface ITest {
  interface: {
    isSidebarFixed: boolean;
    accentColor: string;
  };
}

export enum ActionTypes {
  updateFixedSidebar = "UPDATE_FIXED_SIDEBAR",
  updateAccentColor = "UPDATE_ACCENT_COLOR",
}
