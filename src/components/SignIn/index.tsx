import { FunctionComponent, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import useOnClickOutside from "../../hook/useOnClickOutside";
import Header from "../Header";
import Profile from "../Profile";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import FormSignIn from "../FormSignIn";

import "./signin.scss";

const SignIn: FunctionComponent = () => {
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);

  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const [open, setOpen] = useState(false);
  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isNightMode,
  } = interfaceSettings;
  const backgroundColor = nightTheme.background.element;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  const list = navMenu.find((c) => c.lang === lang)!;

  const currentURL = window.location.pathname;

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={false}
      >
        <div className="nav__hamburger_wrapper" ref={ref}>
          <span className="nav__hamburger" onClick={() => setOpen(!open)} />
        </div>
        <div
          className={classNames("nav-sidebar", { sidebaropen: open })}
          style={{
            backgroundColor: isNavbarNightMode
              ? backgroundColor
              : accentColor.static,
          }}
        >
          <div className="nav-sidebar-wrapper">
            <ul className="list-nav-sidebar">
              {list.data.map((item) => (
                <li className="nav-sidebar-item" key={item.name}>
                  {currentURL === item.path ? (
                    <span className="active-link">{item.name}</span>
                  ) : (
                    <Link className="nav-sidebar-link" to={item.path}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Header>
      <Profile
        accentColor={accentColor}
        isProfileShow={isProfileShow}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isNavbarNightMode={isNavbarNightMode}
        isNightMode={isNightMode}
      />
      <div className="sign__wrapper">
        <div className="sign__image">
          <div className="image-wrapper"></div>
        </div>
        <div className="sign__content-wrapper">
          <FormSignIn />
        </div>
      </div>
    </>
  );
};
export default SignIn;
