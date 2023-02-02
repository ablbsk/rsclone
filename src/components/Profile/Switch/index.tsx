import "./switch.scss";
import { FunctionComponent } from "react";

const Switch: FunctionComponent = () => {
  return (
    <label className="switch">
      <input className="switch__checkbox" type="checkbox" />
      <span className="switch__slider"></span>
    </label>
  );
};

export default Switch;
