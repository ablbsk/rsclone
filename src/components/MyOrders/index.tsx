import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import {
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../actions";
import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import Profile from "../Profile";
import Header from "../Header";
import Footer from "../Footer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import { IAuthReducer } from "../../interfaces/authReducer";
import { getOrdersByUserId } from "../../services/apiOrders";
import Spinner from "../Spinner";
import { IMyOrdersReducer } from "../../interfaces/myOrdersReducer";
import ErrorMessage from "../ErrorMessage";
import MyOrdersList from "./MyOrdersList";

import "./myOrders.scss";

const MyOrders: FunctionComponent = () => {
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

  const myOrdersStore = useSelector(
    (state: IMyOrdersReducer) => state.myOrdersReducer
  );
  const { ordersLoadingStatus, orders } = myOrdersStore;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  // eslint-disable-next-line
  const list = navMenu.find((c) => c.lang === lang)!;

  const currentURL = window.location.pathname;

  const { t } = useTranslation("dataLang");

  const dispatch = useDispatch();

  const getOrders = async (): Promise<void> => {
    try {
      dispatch(myOrdersFetching());
      const orders = await getOrdersByUserId(user._id);
      dispatch(myOrdersFetched(orders));
    } catch {
      dispatch(myOrdersFetchingError());
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const spinner = ordersLoadingStatus === "loading" ? <Spinner /> : null;

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
      <div className="my-orders__wrapper" style={{ backgroundColor }}>
        {spinner}
        {ordersLoadingStatus === "idle" ? (
          <MyOrdersList orders={orders} />
        ) : null}
        {ordersLoadingStatus === "error" ? <ErrorMessage /> : null}
      </div>
      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};

export default MyOrders;
