import "./profile.scss";
import { FunctionComponent } from "react";
import { updateFixedSidebar } from "../../actions";
import Switch from "./Switch";

const Profile: FunctionComponent = () => {
  const closeProfile = () => {
    // TODO Temporary
    const profile = document.querySelector(".profile") as HTMLElement;
    profile.classList.remove("profile--show");
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <h2 className="profile__title">Profile</h2>
        <button className="button profile__close" onClick={closeProfile}>
          X
        </button>
      </div>
      <div className="profile__wrapper">
        <div className="profile__user">
          <span className="profile__image"></span>
          <p className="profile__email">user_ok@gmail.com</p>
          <p className="profile__role">Admin</p>
          <button className="button profile__sign-out">Sign out</button>
        </div>
        <div className="settings">
          <h2 className="settings__title">Settings</h2>
          <ul className="settings__list">
            <li className="settings__item">
              <span className="settings__name">Night mode</span>
              <Switch />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar fixed</span>
              <Switch action={updateFixedSidebar} />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar night mode</span>
              <Switch />
            </li>
            <li className="settings__item">
              <span className="settings__name">Navbar night mode</span>
              <Switch />
            </li>
          </ul>
          <div className="settings__colors">
            <h4 className="settings__subtitle">Change accent color</h4>
            <ul className="settings__list settings__list--row">
              <li className="settings__item">
                <span className="settings__color"></span>
              </li>
              <li className="settings__item">
                <span className="settings__color settings__color--forest"></span>
              </li>
              <li className="settings__item">
                <span className="settings__color settings__color--purple"></span>
              </li>
              <li className="settings__item">
                <span className="settings__color settings__color--coffee"></span>
              </li>
            </ul>
          </div>
          <button className="button settings__button">Reset to default</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
