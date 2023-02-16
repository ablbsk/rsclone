import { ActionCreator, AnyAction } from "redux";
import { IOrder } from "../interfaces/order";

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
  isNightMode: boolean;
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
  isNightMode: boolean;
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

export type CardType = {
  colors: {
    background: string;
    font: string;
  };
  value: string | number;
  title: string;
  icon: string;
};

export type CircularProgressType = {
  progress: number;
  todaySales: number;
};

export type GraphType = {
  isNightMode: boolean;
  orders: IOrder[];
};
