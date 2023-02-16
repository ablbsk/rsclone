import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import "./home.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import Header from "../Header";
import Profile from "../Profile";
import InfoBlock from "./InfoBlock";
import AudioPlayer from "./AudioPlayer";
import Footer from "../Footer";
import Сarousel from "./Carousel";
import OrderProcess from "./OrderProcess";
import videoTie from "../../assets/video/videoTie.mp4";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";

const Home: FunctionComponent = () => {
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);

  const list = navMenu.find((c) => c.lang === lang)!;
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
      <AudioPlayer />
      <main className="main">
        <div className="nav-block">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
        </div>
        <div className="video-block">
          <video id="background-video" className="videoTag" autoPlay loop muted>
            <source src={videoTie} type="video/mp4" />
          </video>
        </div>
        <OrderProcess
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <InfoBlock
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <Сarousel
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <div className="banner-wrapper"></div>
        <Footer
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      </main>
    </>
  );
};

export default Home;
