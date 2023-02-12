import { FunctionComponent, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useClickAway } from "react-use";

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

const Home: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isProfileShow } = interfaceSettings;
  const [open, setOpen] = useState(false);

  const backgroundColor = nightTheme.background.element;

  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={false}
      >
        <nav className="nav-wrapper">
          <div className="list-wrapper">
            <ul className="list-nav">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/configurator">
                  Configurator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Tie Market
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__hamburger_wrapper">
          <span className="nav__hamburger" onClick={() => setOpen(!open)} />
        </div>
        <div
          ref={ref}
          className={classNames("nav-sidebar", { sidebaropen: open })}
          style={{
            backgroundColor: isNavbarNightMode ? backgroundColor : accentColor,
          }}
        >
          <div className="nav-sidebar-wrapper">
            <ul className="list-nav-sidebar">
              <li className="nav-sidebar-item">
                <Link className="nav-sidebar-link" to="">
                  Home
                </Link>
              </li>
              <li className="nav-sidebar-item">
                <Link className="nav-sidebar-link" to="/configurator">
                  Configurator
                </Link>
              </li>
              <li className="nav-sidebar-item">
                <Link className="nav-sidebar-link" to="">
                  Tie Market
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <Profile accentColor={accentColor} isProfileShow={isProfileShow} />
      <AudioPlayer />
      <main className="main">
        <div className="nav-block">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
        </div>
        <div className="video-block" />
        <OrderProcess />
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
