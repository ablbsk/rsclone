import "./profile.scss";
import { FunctionComponent, useRef } from "react";
import classNames from "classnames";
import Hover from "../Hover";
import { useDispatch, useSelector } from "react-redux";
import Switch from "./Switch";
import { ProfileType } from "../../types";
import { accentColors } from "../../data/constants";
import useOnClickOutside from "../../hook/useOnClickOutside";
import {
  updateFixedSidebar,
  updateNightMode,
  updateSidebarAccentMode,
  updateAccentColor,
  updateNavbarNightMode,
  showProfile,
  resetInterfaceToDefault,
} from "../../actions";
import { IStore } from "../../interfaces/store";

const Profile: FunctionComponent<ProfileType> = ({
  accentColor,
  isProfileShow,
  isSidebarFixed,
  isSidebarAccentMode,
  isNavbarNightMode,
  isNightMode,
}: ProfileType) => {
  const { email, role } = useSelector((state: IStore) => state.auth.user);

  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const updateColor = (color: { static: string; hover: string }) =>
    dispatch(updateAccentColor(color));

  useOnClickOutside(ref, () => dispatch(showProfile()), isProfileShow);

  return (
    <div
      className={classNames("profile", { "profile--show": isProfileShow })}
      ref={ref}
    >
      <div className="profile__header">
        <h2 className="profile__title">Profile</h2>
        <Hover>
          <button
            className="button profile__close"
            onClick={() => dispatch(showProfile())}
          >
            X
          </button>
        </Hover>
      </div>
      <div className="profile__wrapper">
        <div className="profile__user">
          <span className="profile__image"></span>
          <p className="profile__email">{email}</p>
          <p className="profile__role">{role}</p>
          <Hover>
            <button className="button profile__sign-out">Sign out</button>
          </Hover>
        </div>
        <div className="settings">
          <h2 className="settings__title">Settings</h2>
          <ul className="settings__list">
            <li className="settings__item">
              <span className="settings__name">Night mode</span>
              <Switch
                action={updateNightMode}
                accentColor={accentColor}
                isChecked={isNightMode}
                isNightMode={isNightMode}
              />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar fixed</span>
              <Switch
                action={updateFixedSidebar}
                accentColor={accentColor}
                isChecked={isSidebarFixed}
                isNightMode={isNightMode}
              />
            </li>
            <li className="settings__item">
              <span className="settings__name">Sidebar accent mode</span>
              <Switch
                action={updateSidebarAccentMode}
                accentColor={accentColor}
                isChecked={isSidebarAccentMode}
                isNightMode={isNightMode}
              />
            </li>
            <li className="settings__item">
              <span className="settings__name">Navbar night mode</span>
              <Switch
                action={updateNavbarNightMode}
                accentColor={accentColor}
                isChecked={isNavbarNightMode}
                isNightMode={isNightMode}
              />
            </li>
          </ul>
          <div className="settings__colors">
            <h4 className="settings__subtitle">Change accent color</h4>
            <ul className="settings__list settings__list--row">
              <li className="settings__item">
                <span
                  className="settings__color settings__color--default"
                  onClick={() => updateColor(accentColors.default)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--forest"
                  onClick={() => updateColor(accentColors.forest)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--purple"
                  onClick={() => updateColor(accentColors.purple)}
                ></span>
              </li>
              <li className="settings__item">
                <span
                  className="settings__color settings__color--coffee"
                  onClick={() => updateColor(accentColors.coffee)}
                ></span>
              </li>
            </ul>
          </div>
          <Hover>
            <button
              className="button settings__button"
              onClick={() => dispatch(resetInterfaceToDefault())}
            >
              Reset to default
            </button>
          </Hover>
        </div>
      </div>
    </div>
  );
};

export default Profile;
