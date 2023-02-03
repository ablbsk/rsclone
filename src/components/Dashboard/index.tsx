import "./dashboard.scss";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IStore } from "@/src/interfaces/store";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";

const Dashboard: FunctionComponent = () => {
  const interfaceSettings = useSelector(
    (state: IStore) => state.test.interface
  );

  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
  } = interfaceSettings;

  const whenSidebarFixed = () => {
    if (isSidebarFixed) {
      return { marginLeft: "100px" };
    }
  };

  return (
    <>
      <Header accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
      <Profile accentColor={accentColor} />
      <Sidebar
        accentColor={accentColor}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
      />
      <main className="dashboard" style={whenSidebarFixed()}>
        <div className="container">
          <h1 className="dashboard__header">h1: Welcome to dashboard</h1>
          <p className="dashboard__breadcrumbs">
            Breadcrumbs: Home - Dashboard
          </p>
          <h2 className="dashboard__header-2">h2: Header 2 size</h2>
          <h2 className="dashboard__header-3">h3: Header 3 size</h2>
          <p className="dashboard__text">Regular text size</p>
          <p className="dashboard__text--small">Regular text - small size</p>
        </div>
      </main>
    </>
  );
};
export default Dashboard;
