import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import "./configurator.scss";
import configurator from "../../data/configurator";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import View from "./View";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";
import navMenu from "../../data/navmenu";

const Configurator: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isNightMode,
  } = interfaceSettings;
  const backgroundColor = nightTheme.background.element;

  const lang = "ru";
  const [type, setType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const tieList = configurator.find((c) => c.lang === lang)!;
  const typeCategory = tieList.data.find((tie) => tie.type === type)!;
  const subCategories = typeCategory?.subCategories;
  const hasSubCategories = !!typeCategory?.subCategories?.length;
  const listNav = navMenu.find((c) => c.lang === lang)!;
  const currentURL = window.location.pathname;

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={false}
      >
        <div className="nav__hamburger_wrapper">
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
              {listNav.data.map((item) => (
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
      <div className="configurator-wrapper">
        <div className="tie-category-banner">
          <div className="container">
            <div className="tie-category">
              {!type && !hasSubCategories ? (
                <Categories
                  tieList={tieList}
                  setType={setType}
                  type={type}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              ) : type && hasSubCategories ? (
                <SubCategories
                  setType={setType}
                  type={type}
                  price={typeCategory?.price}
                  subCategories={subCategories!}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              ) : (
                <View
                  type={type}
                  price={typeCategory?.price}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};

export default Configurator;
