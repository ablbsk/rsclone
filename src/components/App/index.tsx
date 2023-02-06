import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard";
import SingIn from "../SingIn";
import SingUp from "../SingUp";
import Home from "../Home";
import { IStore } from "../../interfaces/store";
import classNames from "classnames";

const App: FunctionComponent = () => {
  const { isNightMode } = useSelector((state: IStore) => state.appInterface);
  document.body.className = classNames("", { "body--night-mode": isNightMode });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
