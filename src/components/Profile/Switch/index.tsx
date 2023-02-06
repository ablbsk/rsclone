import "./switch.scss";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { SwitchType } from "../../../types";
import { lightTheme } from "../../../data/constants";

const Switch: FunctionComponent<SwitchType> = ({
  action,
  accentColor,
  isChecked,
}: SwitchType) => {
  const dispatch = useDispatch();

  const updateState = (a: boolean) => dispatch(action(a));

  const styles = {
    backgroundColor: isChecked
      ? accentColor.static
      : lightTheme.background.element,
    borderColor: isChecked ? accentColor.static : lightTheme.fontColor,
  };

  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        onChange={(e) => updateState((e.target as HTMLInputElement).checked)}
        checked={isChecked}
      />
      <span className="switch__slider" style={styles}></span>
    </label>
  );
};

export default Switch;
