import "./sidebar.scss";
import { FunctionComponent } from "react";
import { SidebarType } from "../../types";
import classNames from "classnames";
import { SidebarIcon } from "./SidebarIcon";
import { lightTheme } from "../../data/constants";

const Sidebar: FunctionComponent<SidebarType> = ({
  accentColor,
  isSidebarFixed,
  isSidebarAccentMode,
  isSidebarShow,
}: SidebarType) => {
  const backgroundColor = lightTheme.background.element;

  const itemColor = isSidebarAccentMode ? backgroundColor : accentColor;

  return (
    <nav
      className={classNames(
        "sidebar",
        { "sidebar--fixed": isSidebarFixed },
        { "sidebar--show": isSidebarShow }
      )}
      style={
        isSidebarAccentMode
          ? { backgroundColor: accentColor, color: backgroundColor }
          : { backgroundColor: backgroundColor, color: accentColor }
      }
    >
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"dashboard"} />
            <span className="sidebar__name">Dashboard</span>
          </li>
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"calendar"} />
            <span className="sidebar__name">Calendar</span>
          </li>
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"orders"} />
            <span className="sidebar__name">Orders</span>
          </li>
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"users"} />
            <span className="sidebar__name">Users</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;