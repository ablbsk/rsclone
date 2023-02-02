import "./header.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";

const Header: FunctionComponent = () => {
  // TODO Temporary
  const showProfile = (): void => {
    const profile = document.querySelector(".profile") as HTMLElement;
    profile.classList.toggle("profile--show");
  };

  const language = "en";

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <span className="header__hamburger"></span>
          <Link className="header__link" to="/dashboard">
            <span className="header__logo"></span>
          </Link>
          <ul className="header__list">
            <li className="header__item">
              <div className="language">
                <img
                  className="language__icon"
                  src={language === "en" ? flagUS : flagRU}
                  alt="Current language"
                />
                <span className="language__title">en</span>
              </div>
            </li>
            <li className="header__item" onClick={showProfile}>
              <span className="header__profile"></span>
            </li>
          </ul>
        </div>
      </div>
      <Profile />
    </header>
  );
};
export default Header;
