import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import {
  myTiesFetching,
  myTiesFetched,
  myTiesFetchingError,
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../actions";
import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import Profile from "../Profile";
import Header from "../Header";
import Footer from "../Footer";
import Hover from "../Hover";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import { IAuthReducer } from "../../interfaces/authReducer";
import { getTiesByUserId } from "../../services/apiTies";
import { getOrdersBySellerId } from "../../services/apiOrders";
import Spinner from "../Spinner";
import { IMyTiesReducer } from "../../interfaces/myTiesReducer";
import { IMyOrdersReducer } from "../../interfaces/myOrdersReducer";
import ErrorMessage from "../ErrorMessage";
import MyTiesList from "./MyTiesList";

import "./myTies.scss";

const MyTies: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("1");

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
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;
  const myTiesStore = useSelector(
    (state: IMyTiesReducer) => state.myTiesReducer
  );
  const { tieLoadingStatus, ties } = myTiesStore;

  const myOrdersStore = useSelector(
    (state: IMyOrdersReducer) => state.myOrdersReducer
  );
  const { ordersLoadingStatus, orders } = myOrdersStore;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  const list = navMenu.find((c) => c.lang === lang)!;

  const currentURL = window.location.pathname;

  const { t } = useTranslation("dataLang");

  const dispatch = useDispatch();

  const getDataList = async (n: string) => {
    console.log(n);
    try {
      if (n === "1") {
        dispatch(myTiesFetching());
        const ties = await getTiesByUserId(user._id);
        dispatch(myTiesFetched(ties));
      } else {
        dispatch(myOrdersFetching());
        const orders = await getOrdersBySellerId(user._id);
        dispatch(myOrdersFetched(orders));
      }
    } catch {
      if (n === "1") {
        dispatch(myTiesFetchingError());
      } else {
        dispatch(myOrdersFetchingError());
      }
    }
  };

  useEffect(() => {
    getDataList("1");
  }, []);

  const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (typeof id === "string") {
      setActiveButton(id);
    }
  };

  const spinner = tieLoadingStatus === "loading" ? <Spinner /> : null;

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
      <div className="my-ties__wrapper" style={{ backgroundColor }}>
        <div className="my-ties__header">
          <Hover>
            <button
              style={{ backgroundColor: accentColor.static }}
              className={`users__header-button ${
                activeButton == "1" ? "users__header-button_active" : ""
              }`}
              data-id="1"
              onClick={(e) => {
                toggleHandler(e);
                getDataList(e.currentTarget.dataset.id!);
              }}
            >
              {t("myTies.myTies")}
            </button>
          </Hover>
          <Hover>
            <button
              style={{ backgroundColor: accentColor.static }}
              className={`users__header-button ${
                activeButton == "2" ? "users__header-button_active" : ""
              }`}
              data-id="2"
              onClick={(e) => {
                toggleHandler(e);
                getDataList(e.currentTarget.dataset.id!);
              }}
            >
              {t("myTies.mySales")}
            </button>
          </Hover>
        </div>
        {spinner}
        {tieLoadingStatus === "idle" && activeButton === "1" ? (
          <MyTiesList ties={ties} activeButton={activeButton} />
        ) : null}
        {tieLoadingStatus === "error" && activeButton === "1" ? (
          <ErrorMessage />
        ) : null}
        {/* {(ordersLoadingStatus === "idle"  && activeButton === "2") ? (
        <OrdersList ties={ties} activeButton={activeButton} />
      ) : null} */}
        {ordersLoadingStatus === "error" && activeButton === "2" ? (
          <ErrorMessage />
        ) : null}
      </div>

      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};

export default MyTies;
