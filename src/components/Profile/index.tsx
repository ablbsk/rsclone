import "./profile.scss";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import Switch from "./Switch";
import { ProfileType } from "../../types";
import {
  updateFixedSidebar,
  updateNightMode,
  updateSidebarAccentMode,
  updateAccentColor,
  updateNavbarNightMode,
} from "../../actions";

const Profile: FunctionComponent<ProfileType> = ({
  accentColor,
}: ProfileType) => {
  const dispatch = useDispatch();

  const closeProfile = () => {
    const profile = document.querySelector(".profile") as HTMLElement;
    profile.classList.remove("profile--show");
  };

  const updateColor = (color: string) => dispatch(updateAccentColor(color));

  return (
    <div className="profile">
      <div className="profile__header">
        <h2 className="profile__title">Profile</h2>
        <button
          className="button profile__close"
          style={{ backgroundColor: accentColor }}
          onClick={closeProfile}
        >
          X
        </button>
      </div>
      <div className="profile__wrapper">
        <div className="profile__user">
          <span className="profile__image"></span>
          <p className="profile__email">user_ok@gmail.com</p>
          <p className="profile__role">Admin</p>
          <button
            className="button profile__sign-out"
            style={{ backgroundColor: accentColor }}
          >
            Sign out
          </button>
        </div>
        <div className="settings">
          <h2 className="settings__title">Settings</h2>
          <ul className="settings__list">
            <li className="settings__item">
              <span className="settings__name">Night mode</span>
              <Switch action={updateNightMode} />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar fixed</span>
              <Switch action={updateFixedSidebar} />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar accent mode</span>
              <Switch action={updateSidebarAccentMode} />
            </li>
            <li className="settings__item">
              <span className="settings__name">Navbar night mode</span>
              <Switch action={updateNavbarNightMode} />
            </li>
          </ul>
          <div className="settings__colors">
            <h4 className="settings__subtitle">Change accent color</h4>
            <ul className="settings__list settings__list--row">
              <li className="settings__item">
                <span
                  className="settings__color settings__color--default"
                  onClick={() => updateColor("#4788ff")}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--forest"
                  onClick={() => updateColor("#659157")}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--purple"
                  onClick={() => updateColor("#9e7fbd")}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--coffee"
                  onClick={() => updateColor("#a77e58")}
                ></span>
              </li>
            </ul>
          </div>
          <button
            className="button settings__button"
            style={{ backgroundColor: accentColor }}
          >
            Reset to default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
