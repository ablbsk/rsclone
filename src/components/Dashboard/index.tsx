import "./dashboard.scss";
import { Routes, Route } from "react-router-dom";
import { FunctionComponent, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/store";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";
import classNames from "classnames";
import Index from "./Index/index";
import Users from "./Users";
import Orders from "./Orders";
import Calendar from "./Calendar";

const Dashboard: FunctionComponent = () => {
  const location = useLocation();
  const { t } = useTranslation("dataLang");

  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const language = useSelector((state: IStore) => state.langReducer.lang);

  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isSidebarShow,
    isNightMode,
  } = interfaceSettings;

  const [header, setHeader] = useState<string>();

  useEffect(() => {
    let value = "";

    switch (true) {
      case location.pathname.includes("calendar"):
        value = t("dashboard.headers.calendar");
        break;
      case location.pathname.includes("orders"):
        value = t("dashboard.headers.orders");
        break;
      case location.pathname.includes("users"):
        value = t("dashboard.headers.users");
        break;
      default:
        value = t("dashboard.headers.index");
    }

    setHeader(value);
  }, [location, language]);

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={true}
      />
      <Profile
        accentColor={accentColor}
        isProfileShow={isProfileShow}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isNavbarNightMode={isNavbarNightMode}
        isNightMode={isNightMode}
      />
      <Sidebar
        accentColor={accentColor}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isSidebarShow={isSidebarShow}
        isNightMode={isNightMode}
      />
      <main
        className={classNames("dashboard", {
          "dashboard--indent": isSidebarFixed,
        })}
      >
        <div className="container container--full-width">
          <h1 className="dashboard__header">{header}</h1>
          <Routes>
            <Route path="" element={<Index />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
