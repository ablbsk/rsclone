import "./day.scss";
import { FunctionComponent } from "react";
import { CalendarDayType } from "../../../../types";
import classNames from "classnames";
import moment from "moment";

const Day: FunctionComponent<CalendarDayType> = ({
  day,
  isActiveMonth,
  status,
  setFocusedDay,
}: CalendarDayType) => {
  const data = [
    {
      header: "Non paid",
      value: status.nonPaid.length,
      style: "day__item--non-pain",
    },
    { header: "Paid", value: status.paid.length, style: "day__item--pain" },
    {
      header: "In progress",
      value: status.inProgress.length,
      style: "day__item--in-progress",
    },
    {
      header: "Declined",
      value: status.declined.length,
      style: "day__item--declined",
    },
    {
      header: "Finished",
      value: status.finished.length,
      style: "day__item--finished",
    },
    {
      header: "Deadline",
      value: status.deadline.length,
      style: "day__item--deadline",
    },
  ];

  const markers = data
    .filter((item) => item.value !== 0)
    .map((item) => (
      <li className={classNames("day__item", item.style)} key={item.header}>
        <span>{item.header}</span>
        <span>x{item.value}</span>
      </li>
    ));

  const setDayProps = () => {
    setFocusedDay({
      day: day,
      status: status,
    });
  };

  return (
    <div
      className={classNames("day", {
        "day--today": moment().isSame(day, "day"),
      })}
      onClick={() => setDayProps()}
    >
      <h6
        className={classNames("day__header", {
          "day__header--active": isActiveMonth,
        })}
      >
        {day.format("DD-MMM")}
      </h6>
      <ul className="day__list">{markers}</ul>
    </div>
  );
};

export default Day;
