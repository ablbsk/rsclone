import "./calendar.scss";
import { FunctionComponent, useState } from "react";
import moment, { Moment } from "moment";
import classNames from "classnames";

const Calendar: FunctionComponent = () => {
  const [viewedMonth, setViewedMonth] = useState<number>(moment().month());

  const arr: any[] = [];

  const FF = () => {
    const currentWeek = moment().get("week");
    const newWeek = moment()
      .subtract(moment().month() - viewedMonth, "month")
      .get("week");

    const offset = (currentWeek - newWeek) * 7;

    const size = 42; // 7 days * 6 week
    const today = moment().date();
    const end = today + moment().subtract(today, "day").day() + offset; // past (+)
    const start = -size + end; // future (-)

    for (let i = start; i < end; i++) {
      arr.push({
        label: moment().subtract(i, "day"), // minus - future, plus - past
        isToday: i === 0,
        isCurrentMonth: moment().subtract(i, "day").month() === viewedMonth,
      });
    }
  };

  FF();
  console.log(viewedMonth);

  const days = arr
    .reverse()
    .map(
      (item: { label: Moment; isToday: boolean; isCurrentMonth: boolean }) => (
        <span
          className={classNames("calendar__day", {
            "calendar__day--today": item.isToday,
            "calendar__day--current": item.isCurrentMonth,
          })}
          key={item.label.format("DD-MM")}
        >
          {item.label.format("DD-MMM")}
        </span>
      )
    );

  const titlesArr = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const titles = titlesArr.map((item: string) => (
    <span className="calendar__title" key={item}>
      {item}
    </span>
  ));

  const changeMonth = (direction: number) => {
    if (viewedMonth === 11 && direction === 1) {
      setViewedMonth(0);
    } else if (viewedMonth === 0 && direction === -1) {
      setViewedMonth(11);
    } else {
      setViewedMonth(viewedMonth + direction);
    }
  };

  return (
    <div className="calendar">
      <h1 className="calendar__header">Calendar</h1>
      <div className="calendar__container">{titles}</div>
      <div className="calendar__container">{days}</div>
      <div>
        <button onClick={() => changeMonth(-1)}>Prev</button>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
    </div>
  );
};

export default Calendar;
