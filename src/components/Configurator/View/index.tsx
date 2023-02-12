import { FunctionComponent, useEffect, useState } from "react";
import classNames from "classnames";
import "./view.scss";

import colors from "../../../data/colors";
import tieWeaves from "../../../data/tieWeaves";
import { IIconSetting, IViewSetting } from "../../../interfaces/configurator";
import { ConfiguratorViewType } from "../../../types/configurator";
import getTieColor from "../../../helpers/getTieColor";
import Accordion from "../../Accordion";
import configuratorSettings from "../../../helpers/configuratorSettings";
import iconMapping from "../../../helpers/iconMapping";
import IconFactory from "../IconFactory";
import configurator from "../../../data/configurator";
import { IConfigurator } from "../../../interfaces/configurator";
import { nightTheme } from "../../../data/constants";
import { Link } from "react-router-dom";

const View: FunctionComponent<ConfiguratorViewType> = ({
  type,
  price,
  accentColor,
  isNavbarNightMode,
}: ConfiguratorViewType) => {
  const backgroundColor = nightTheme.background.element;
  const [settings, setSettings] = useState<IIconSetting>({
    weave: "",
    bgColor: "",
    colorOne: "",
    colorTwo: "",
    colorThree: "",
    colorFour: "",
    colorFive: "",
    colorSix: "",
  });

  useEffect(() => {
    setSettings({
      ...settings,
      weave: tieWeaves[0].dataSrc,
      bgColor: getTieColor(colors[0].color.join()),
    });
  }, []);

  return (
    <div className="plants__block-wrapper">
      <div className="preview-panel">
        <div className="image__wrapper">
          <IconFactory
            components={iconMapping}
            settings={settings}
            type={type}
          />
        </div>
      </div>
      <div className="edit-panel">
        <div className="edit-panel__title-wrapper">
          <h3 className="title-item">Color and Weave</h3>
        </div>
        <div className="form-wrapper">
          {configuratorSettings(type).map((setting: IViewSetting) => {
            if (setting.type === "color") {
              return (
                <Accordion title={setting.title} key={setting.title}>
                  <div className="title-form">Apply Color</div>
                  <ul className="colors-list ">
                    {colors.map((elem) => (
                      <li className="colors-item" key={elem.name}>
                        <label htmlFor="color-label">
                          <input
                            type="radio"
                            name={elem.name}
                            className="color-input"
                            onClick={() =>
                              setSettings({
                                ...settings,
                                [setting.name]: getTieColor(elem.color.join()),
                              })
                            }
                          />
                          <span
                            className="tile-picker"
                            style={{
                              backgroundColor: getTieColor(elem.color.join()),
                            }}
                          ></span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              );
            } else {
              return (
                <Accordion title={setting.title} key={setting.title}>
                  <div className="weave-form__wrapper">
                    <div className="title-form">Apply Weave</div>
                    <div className="weave-list-wrapper">
                      <ul className="weave-list">
                        {tieWeaves.map((tieWeave) => (
                          <li className="weave-list__item" key={tieWeave.src}>
                            <label htmlFor="" className="weave__label">
                              <input className="weave__input" type="radio" />
                              <span className="weave-span">
                                <img
                                  className={classNames("weave-img", {
                                    selected:
                                      tieWeave.dataSrc === settings.weave,
                                  })}
                                  src={tieWeave.src}
                                  alt=""
                                  onClick={() =>
                                    setSettings({
                                      ...settings,
                                      weave: tieWeave.dataSrc,
                                    })
                                  }
                                />
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              );
            }
          })}
        </div>
        <div className="btn-next__wrapper">
          <p className="tie-price">Price: {price}$</p>
          <Link
            to=""
            className="btn-link"
            style={{
              backgroundColor: isNavbarNightMode
                ? backgroundColor
                : accentColor,
            }}
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
