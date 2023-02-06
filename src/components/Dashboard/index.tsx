import "./dashboard.scss";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/store";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";
import classNames from "classnames";

const Dashboard: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);

  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isSidebarShow,
    isNightMode,
  } = interfaceSettings;

  return (
    <>
      <Header accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
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
        <div className="container">
          <h1 className="dashboard__header">h1: Welcome to dashboard</h1>
          <p className="dashboard__breadcrumbs">
            Breadcrumbs: Home - Dashboard
          </p>
          <p className="dashboard__text">Regular text size</p>
        </div>
      </main>
    </>
  );
};
export default Dashboard;