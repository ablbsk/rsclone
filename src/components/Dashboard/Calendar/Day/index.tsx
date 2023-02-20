import "./day.scss";
import { FunctionComponent } from "react";
import { CalendarDayType } from "../../../../types";
import classNames from "classnames";
import moment from "moment";

const Day: FunctionComponent<CalendarDayType> = ({ day }: CalendarDayType) => {
  return (
    <span
      className={classNames("calendar__day", {
        "calendar__day--today": moment().isSame(day, "day"),
        "calendar__day--current": moment().isSame(day, "month"),
      })}
    >
      {day.format("DD-MMM")}
    </span>
  );
};

export default Day;
