import "./day.scss";
import { FunctionComponent } from "react";
import { CalendarDayType } from "../../../../types";
import classNames from "classnames";
import moment from "moment";

const Day: FunctionComponent<CalendarDayType> = ({
  day,
  status,
}: CalendarDayType) => {
  const data = [
    { header: "Non paid", value: status.nonPaid.length, style: null },
    { header: "Paid", value: status.paid.length, style: null },
    { header: "In progress", value: status.inProgress.length, style: null },
    { header: "Declined", value: status.declined.length, style: null },
    { header: "Finished", value: status.finished.length, style: null },
    { header: "Deadline", value: status.deadline.length, style: null },
  ];

  const markers = data
    .filter((item) => item.value !== 0)
    .map((item) => (
      <li className="day__item" key={item.header}>
        <span>{item.header}</span>
        <span>{item.value}</span>
      </li>
    ));

  return (
    <div
      className={classNames("day", {
        "day--today": moment().isSame(day, "day"),
        "day--current": moment().isSame(day, "month"),
      })}
    >
      <h6>{day.format("DD-MMM")}</h6>
      <ul className="day__list">{markers}</ul>
    </div>
  );
};

export default Day;
