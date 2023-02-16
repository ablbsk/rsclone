import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Home from "../Home";
import TieMarket from "../TieMarket";
import { IStore } from "../../interfaces/store";
import classNames from "classnames";
import Configurator from "../Configurator";
import MyProfile from "../MyProfile";

const App: FunctionComponent = () => {
  const { isNightMode } = useSelector((state: IStore) => state.appInterface);
  document.body.className = classNames("", { "body--night-mode": isNightMode });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/tiemarket" element={<TieMarket />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<MyProfile />} />
        {/* <Route path="/my-ties" element={<MyTies />} />
        <Route path="/my-orders" element={<MyOrders />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
