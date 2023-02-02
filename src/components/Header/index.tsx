import "./header.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";

const Header: FunctionComponent = () => {
  // TODO Temporary
  const showProfile = (): void => {
    const profile = document.querySelector(".profile") as HTMLElement;
    profile.classList.toggle("profile--show");

    window.addEventListener("click", (e: Event): void => {
      const target = e.target as HTMLElement;

      if (target.contains(profile) && target !== profile) {
        profile.classList.remove("profile--show");
      }
    });
  };

  const showSidebar = (): void => {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    sidebar.classList.toggle("sidebar--show");

    window.addEventListener("click", (e: Event): void => {
      const target = e.target as HTMLElement;

      if (target.contains(sidebar) && target !== sidebar) {
        sidebar.classList.remove("sidebar--show");
      }
    });
  };

  const language = "en";

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <span className="header__hamburger" onClick={showSidebar}></span>
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
    </header>
  );
};
export default Header;
