import { FunctionComponent, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { IUser } from "../../interfaces/user";
import { registration } from "../../services/apiAuth";
import Header from "../Header";
import Profile from "../Profile";
import navMenu from "../../data/navmenu";
import { ILangReducer } from "../../interfaces/langReducer";
import useOnClickOutside from "../../hook/useOnClickOutside";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";

import "./signup.scss";

const SignUp: FunctionComponent = () => {
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);

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
  const backgroundColor = nightTheme.background.element;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setOpen(!open), open);

  const list = navMenu.find((c) => c.lang === lang)!;

  const currentURL = window.location.pathname;

  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setMessage(""), 5000);
    setTimeout(() => setError(""), 5000);
  }, [message, error]);

  const { t } = useTranslation("dataLang");

  const click = async (body: Pick<IUser, "email" | "password" | "role">) => {
    try {
      const message = await registration(body);
      setMessage(message);
      setTimeout(() => navigate("/sign-in"), 3000);
    } catch (e) {
      setError(e as string);
    }
  };

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
      <div className="sign__wrapper">
        <div className="sign__image">
          <div className="image-wrapper"></div>
        </div>
        <div className="sign__content-wrapper">
          <div className="sign__content">
            <h2 className="sign__title">{t("sign.signUp")}</h2>
            <div className="sign__text">{t("sign.text-2")}</div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                role: "USER",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Incorrect email")
                  .required("Required field"),
                password: Yup.string()
                  .min(4, "Minimum 4 symbols")
                  .max(10, "Maximum 10 symbols")
                  .required("Required field"),
              })}
              onSubmit={(values) => {
                click(values);
              }}
            >
              <Form className="form">
                <Field
                  className="field"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage className="error" name="email" component="div" />
                <Field
                  className="field"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
                <div className="sign__radio">
                  <label>
                    <Field
                      className="radio-field"
                      type="radio"
                      name="role"
                      value="USER"
                    />
                    {t("sign.buyer")}
                  </label>
                  <label>
                    <Field
                      className="radio-field"
                      type="radio"
                      name="role"
                      value="SELLER"
                    />
                    {t("sign.seller")}
                  </label>
                </div>
                <button
                  style={{
                    backgroundColor: isNavbarNightMode
                      ? backgroundColor
                      : accentColor.static,
                  }}
                  className="sign__button"
                  type="submit"
                >
                  {t("sign.signIn")}
                </button>
                {message && <div className="message-tooltip">{message}</div>}
                {error && <div className="error-tooltip">{error}</div>}
              </Form>
            </Formik>
            <div className="sign__text-link">
              {t("sign.have")}{" "}
              <Link
                style={{
                  color: isNavbarNightMode
                    ? backgroundColor
                    : accentColor.static,
                }}
                className="text-link"
                to="/sign-in"
              >
                {t("sign.signIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
