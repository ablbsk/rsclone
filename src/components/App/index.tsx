import "./app.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../Dashboard";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Home from "../Home";
import { IStore } from "../../interfaces/store";
import classNames from "classnames";
import Configurator from "../Configurator";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { ILangReducer } from "../../interfaces/langReducer";
import { changeLanguage } from "../../actions";

const App: FunctionComponent = () => {
  const { isNightMode } = useSelector((state: IStore) => state.appInterface);
  document.body.className = classNames("", { "body--night-mode": isNightMode });

  //const lang = useSelector((state: ILangReducer) => state.lang);
  // const { ordersLoadingStatus, orders } = ordersStore;
  //const { t } = useTranslation();
  // const [language, setLanguage] = useState("ru");

  // const handleLenguageChange = (language: string) => {
  //   if (language === "en") {
  //     i18n.changeLanguage("ru");
  //     dispatch("ru");
  //   } else if (language === "ru") {
  //     i18n.changeLanguage("en");
  //     setLanguage("en");
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
