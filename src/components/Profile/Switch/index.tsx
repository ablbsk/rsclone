import "./switch.scss";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator, AnyAction } from "redux";

export type SwitchType = {
  action: ActionCreator<AnyAction>;
};

const Switch: FunctionComponent<SwitchType> = ({ action }: SwitchType) => {
  const dispatch = useDispatch();

  const updateState = (isChecked: boolean) => dispatch(action(isChecked));

  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        onClick={(e) => updateState((e.target as HTMLInputElement).checked)}
      />
      <span className="switch__slider"></span>
    </label>
  );
};

export default Switch;
