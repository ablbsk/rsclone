import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import FormSignIn from "../FormSignIn";

import "./tiemarket.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import Hover from "../Hover";
import tieMarketLang from "../../data/tieMarket";

import {
  tieFetching,
  tieFetched,
  tieFetchingError,
} from "../../actions/tiemarket-actions/index";
import { getTies } from "../../services/apiTies";
import { ITiesReducer } from "../../interfaces/tieReducer";

const TieMarket: FunctionComponent = () => {
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
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setOpenPopup(!openPopup), openPopup);
  useOnClickOutside(ref, () => setOpen(!open), open);
  const currentURL = window.location.pathname;
  const lang = "en";
  const list = navMenu.find((c) => c.lang === lang)!;
  const listLang = tieMarketLang.find((c) => c.lang === lang)!;

  const tiesStore = useSelector((state: ITiesReducer) => state.tiesReducer);
  const { tieLoadingStatus, ties } = tiesStore;

  const dispatch = useDispatch();

  const getTieList = async () => {
    try {
      dispatch(tieFetching());
      const ties = await getTies();
      dispatch(tieFetched(ties));
    } catch {
      dispatch(tieFetchingError());
    }
  };
  useEffect(() => {
    getTieList();
  }, []);
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
      <main className="main-market">
        <div className="tiemarket-wrapper">
          <div className="container">
            <div className="tiemarket__banner-wrapper">
              <div className="market-block">
                <div className="market-block__title_wrapper">
                  <h4 className="market-block__title">{listLang.data.title}</h4>
                </div>
                <div className="market-block__products">
                  <div className="row__products">
                    {ties?.map((item) => (
                      <div className="tie__product" key={item.name}>
                        <div className="tie__products_img">
                          <img
                            className="products_img"
                            src={item.image}
                            alt=""
                          />
                        </div>
                        <div className="tie__products_discription">
                          <p className="tie__products_name">{item.name}</p>
                          <p className="tie__products_price">
                            {listLang.data.prace} 20$
                          </p>
                          <div className="tie__products_wrapper">
                            <Hover>
                              <button
                                className="tie__products_btn"
                                onClick={() => setOpenPopup(!openPopup)}
                                style={{
                                  backgroundColor: isNavbarNightMode
                                    ? backgroundColor
                                    : accentColor.static,
                                }}
                              >
                                {listLang.data.btn}
                              </button>
                            </Hover>
                            <button className="btn__like"></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("popup-overlay", { overlay: openPopup })}>
          <div
            className={classNames("popup", { openpopup: openPopup })}
            ref={popupRef}
          >
            <FormSignIn />
          </div>
        </div>
      </main>
      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};
export default TieMarket;
