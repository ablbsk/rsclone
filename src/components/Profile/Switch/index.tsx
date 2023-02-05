import "./switch.scss";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { SwitchType } from "../../../types";
import { lightTheme } from "../../../data/constants";

const Switch: FunctionComponent<SwitchType> = ({
  action,
  accentColor,
}: SwitchType) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const updateState = (isChecked: boolean) => {
    setIsChecked(isChecked);
    dispatch(action(isChecked));
  };

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
        onClick={(e) => updateState((e.target as HTMLInputElement).checked)}
      />
      <span className="switch__slider" style={styles}></span>
    </label>
  );
};

export default Switch;