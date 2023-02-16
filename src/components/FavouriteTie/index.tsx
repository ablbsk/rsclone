import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import FormSignIn from "../FormSignIn";

import "./favouritetie.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import Hover from "../Hover";
import favouriteTieLang from "../../data/favouritetie";
import { ILangReducer } from "../../interfaces/langReducer";
import { ITie } from "@/src/interfaces/tie";

const FavoriteTie: FunctionComponent = () => {
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
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const list = navMenu.find((c) => c.lang === lang)!;
  const listLang = favouriteTieLang.find((c) => c.lang === lang)!;

  const getfavouriteTie = localStorage.getItem("favouriteTie");
  const favouriteTie = getfavouriteTie ? JSON.parse(getfavouriteTie) : [];
  const [ties, setTies] = useState<ITie[]>(favouriteTie);

  console.log("ties2", ties);

  const deleteTies = (id: string): void => {
    const favTies = ties.filter((tie) => tie._id !== id);
    setTies(favTies);
  };

  // useEffect(() => {
  //   localStorage.removeItem("favouriteTie");
  // }, []);

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
                    {ties?.map((tie) => (
                      <div className="tie__product" key={tie.name}>
                        <div className="tie__products_img">
                          <img
                            className="products_img"
                            src={tie.image}
                            alt=""
                          />
                        </div>
                        <div className="tie__products_discription">
                          <p className="tie__products_name">{tie.name}</p>
                          <p className="tie__products_price">
                            {listLang.data.price} {tie.price}$
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
                            <button
                              className="btn__like"
                              onClick={() => deleteTies(tie._id)}
                            ></button>
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

export default FavoriteTie;
