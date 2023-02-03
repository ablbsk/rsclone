import "./dashboard.scss";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";
import { IStore } from "@/src/interfaces/store";

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

  return (
    <>
      <Header accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
      <Profile accentColor={accentColor} />
      <Sidebar
        accentColor={accentColor}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
      />
      <main></main>
    </>
  );
};
export default Dashboard;
