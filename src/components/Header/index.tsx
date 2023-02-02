import "./header.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import flagUS from "../../assets/images/jpg/flag-us.jpg";
import flagRU from "../../assets/images/jpg/flag-ru.jpg";

const Header: FunctionComponent = () => {
  const showBlock = (name: string): void => {
    const element = document.querySelector(`.${name}`) as HTMLElement;
    element.classList.toggle(`${name}--show`);

    window.addEventListener("click", (e: Event): void => {
      const target = e.target as HTMLElement;

      if (target.contains(element) && target !== element) {
        element.classList.remove(`${name}--show`);
      }
    });
  };

  const language = "en";

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <span
            className="header__hamburger"
            onClick={() => showBlock("sidebar")}
          ></span>
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
            <li className="header__item" onClick={() => showBlock("profile")}>
              <span className="header__profile"></span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
