import "./calendar.scss";
import { FunctionComponent } from "react";
import moment, { Moment } from "moment";
import classNames from "classnames";

const Calendar: FunctionComponent = () => {
  const arr = [];
  const today = moment().day();
  const length = 21;
  const start = -(length + 7 - today);
  const end = length + today - 7;

  for (let i = start; i < end; i++) {
    arr.push({
      label: moment().subtract(i, "day"),
      isToday: i === 0,
    });
  }

  const days = arr
    .reverse()
    .map((item: { label: Moment; isToday: boolean }) => (
      <span
        className={classNames("calendar__day", {
          "calendar__day--today": item.isToday,
        })}
        key={item.label.format("DD-MM")}
      >
        {item.label.format("DD")}
      </span>
    ));

  const titlesArr = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const titles = titlesArr.map((item: string) => (
    <span className="calendar__title" key={item}>
      {item}
    </span>
  ));

  return (
    <div className="calendar">
      <h1 className="calendar__header">Calendar</h1>
      <div className="calendar__container">{titles}</div>
      <div className="calendar__container">{days}</div>
    </div>
  );
};

export default Calendar;
