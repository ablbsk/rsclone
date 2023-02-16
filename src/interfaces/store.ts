import { ILogin } from "../interfaces/login";

export interface IStore {
  appInterface: IAppInterface;
  auth: ILogin;
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
  registration = "REGISTRATION",
  authorization = "AUTHORIZATION",
  usersFetching = "USERS_FETCHING",
  usersFetched = "USERS_FETCHED",
  usersFetchingError = "USERS_FETCHING",
  userDeleted = "USER_DELETED",
  ordersFetching = "ORDERS_FETCHING",
  ordersFetched = "ORDERS_FETCHED",
  ordersFetchingError = "ORDERS_FETCHING",
  orderDeleted = "ORDER_DELETED",
<<<<<<< HEAD
  tieFetching = "TIE_FETCHING",
  tieFetched = "TIE_FETCHED",
  tieFetchingError = "TIE_FETCHING",
  tieDeleted = "ORDER_DELETED",
=======
  changeLanguage = "CHANGE_LANGUAGE",
>>>>>>> d38781abb8a146210846349b13842786b0e046cb
}
