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
import FavoriteTie from "../FavouriteTie";
import MyProfile from "../MyProfile";
import MyTies from "../MyTies";
import MyOrders from "../MyOrders";
import AddTie from "../AddTie";
import Landing from "../Landing";
import SubCategories from "../Configurator/SubCategories";
import View from "../Configurator/View";

const App: FunctionComponent = () => {
  const { isNightMode } = useSelector((state: IStore) => state.appInterface);
  document.body.className = classNames("", { "body--night-mode": isNightMode });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/configurator/:category" element={<SubCategories />} />
          <Route path="/configurator/:category/:type" element={<View />} />
          <Route path="/configurator/plains" element={<View />} />
          <Route path="/tie-market" element={<TieMarket />} />
          <Route path="/favourite-tie" element={<FavoriteTie />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/my-ties" element={<MyTies />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/add-tie" element={<AddTie />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
