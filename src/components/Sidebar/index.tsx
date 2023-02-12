import "./sidebar.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { SidebarType } from "../../types";
import classNames from "classnames";
import { SidebarIcon } from "./SidebarIcon";
import { lightTheme, nightTheme } from "../../data/constants";

const Sidebar: FunctionComponent<SidebarType> = ({
  accentColor,
  isSidebarFixed,
  isSidebarAccentMode,
  isSidebarShow,
  isNightMode,
}: SidebarType) => {
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const itemColor = isSidebarAccentMode
    ? nightTheme.sidebarFontColor
    : accentColor.static;

  return (
    <nav
      className={classNames(
        "sidebar",
        { "sidebar--fixed": isSidebarFixed },
        { "sidebar--show": isSidebarShow }
      )}
      style={
        isSidebarAccentMode
          ? { backgroundColor: accentColor.static, color: itemColor }
          : { backgroundColor: backgroundColor, color: accentColor.static }
      }
    >
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <Link className="header__link" to="">
            <li className="sidebar__item">
              <SidebarIcon color={itemColor} type={"dashboard"} />
              <span className="sidebar__name">Dashboard</span>
            </li>
          </Link>
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"calendar"} />
            <span className="sidebar__name">Calendar</span>
          </li>
          <li className="sidebar__item">
            <SidebarIcon color={itemColor} type={"orders"} />
            <span className="sidebar__name">Orders</span>
          </li>
          <Link className="header__link" to="users">
            <li className="sidebar__item">
              <SidebarIcon color={itemColor} type={"users"} />
              <span className="sidebar__name">Users</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
