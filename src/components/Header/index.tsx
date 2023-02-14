import "./header.scss";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";
import { HeaderType } from "../../types";
import { showSidebar, showProfile } from "../../actions";
import { nightTheme } from "../../data/constants";

import i18n from "../../i18n";
import { ILangReducer } from "../../interfaces/langReducer";
import { changeLanguage } from "../../actions";

const Header: FunctionComponent<HeaderType> = ({
  accentColor,
  isNavbarNightMode,
  children,
  isButtonVisible,
}: HeaderType) => {
  const dispatch = useDispatch();
  const backgroundColor = nightTheme.background.element;

  const lang = useSelector((state: ILangReducer) => state.langReducer);

  const handleLenguageChange = () => {
    console.log(lang.lang);
    if (lang.lang === "en") {
      i18n.changeLanguage("ru");
      dispatch(changeLanguage({ lang: "ru" }));
    } else if (lang.lang === "ru") {
      i18n.changeLanguage("en");
      dispatch(changeLanguage({ lang: "en" }));
    }
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: isNavbarNightMode
          ? backgroundColor
          : accentColor.static,
      }}
    >
      <div className="container">
        <div className="header__wrapper">
          {isButtonVisible && (
            <span
              className="header__hamburger"
              onClick={() => dispatch(showSidebar())}
            ></span>
          )}
          <Link className="header__link" to="/dashboard">
            <span className="header__logo"></span>
          </Link>
          {children}
          <ul className="header__list">
            <li className="header__item">
              <div className="language">
                <button className="button__lang" onClick={handleLenguageChange}>
                  <img
                    className="language__icon"
                    src={lang.lang === "en" ? flagUS : flagRU}
                    alt="Current language"
                  />
                </button>
                <span className="language__title">
                  {lang.lang === "en" ? "en" : "ru"}
                </span>
              </div>
            </li>
            <li
              className="header__item"
              onClick={() => dispatch(showProfile())}
            >
              <span className="header__profile"></span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
