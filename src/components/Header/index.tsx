import "./header.scss";
import { Children, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";
import { HeaderType } from "../../types";
import { showSidebar, showProfile } from "../../actions";
import { nightTheme } from "../../data/constants";

const Header: FunctionComponent<HeaderType> = ({
  accentColor,
  isNavbarNightMode,
  renderLinks,
}: HeaderType) => {
  const dispatch = useDispatch();

  const backgroundColor = nightTheme.background.element;
  const language = "en"; // TODO Temporary

  return (
    <header
      className="header"
      style={{
        backgroundColor: isNavbarNightMode ? backgroundColor : accentColor,
      }}
    >
      <div className="container">
        <div className="header__wrapper">
          <span
            className="header__hamburger"
            onClick={() => dispatch(showSidebar())}
          ></span>
          <Link className="header__link" to="/dashboard">
            <span className="header__logo"></span>
          </Link>
          {Children}
          <ul className="header__list">
            <li className="header__item">
              <div className="language">
                <img
                  className="language__icon"
                  src={language === "en" ? flagUS : flagRU}
                  alt="Current language"
                />
                <span className="language__title">
                  {language === "en" ? "en" : "ru"}
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
