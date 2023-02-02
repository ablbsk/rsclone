import "./dashboard.scss";
import { FunctionComponent } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";

const Dashboard: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Profile />
      <Sidebar />
      <main></main>
    </>
  );
};
export default Dashboard;
