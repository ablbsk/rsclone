import "./calendar.scss";
import { FunctionComponent, useEffect, useState } from "react";
import moment from "moment";
import Day from "./Day";
import { CalendarDayType } from "../../../types";
import { getOrdersBySellerId } from "../../../services/apiOrders";
import { useSelector } from "react-redux";
import { IStore } from "../../../interfaces/store";
import { IUser } from "../../../interfaces/user";
import { IOrder } from "../../../interfaces/order";

const Calendar: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user: IUser = useSelector((state: IStore) => state.auth.user);

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [viewedMonth, setViewedMonth] = useState<number>(moment().month());

  useEffect(() => {
    getOrdersBySellerId(user._id)
      .then((orders: IOrder[]) => setOrders(orders))
      .catch((e) => console.log(e));
  }, []);

  console.log(orders.filter((order: IOrder) => order.status !== "FINISHED"));

  // const arr: CalendarDayType[] = [];
  const arr: any[] = [];
  const deadlinesArr: any[] = []; // { order: IOrder, date: date }

  const update = () => {
    const currentWeek = moment().get("week");
    const newWeek = moment()
      .subtract(moment().month() - viewedMonth, "month")
      .get("week");

    const offset = (currentWeek - newWeek) * 7;

    const size = 42; // 7 days * 6 weeks
    const today = moment().date();
    const end = today + moment().subtract(today, "day").day() + offset; // past (+)
    const start = -size + end; // future (-)

    for (let i = start; i < end; i++) {
      const day = moment().subtract(i, "day");
      const dayOrders = orders.filter((order: IOrder) =>
        day.isSame(order.date, "day")
      );

      if (dayOrders.length) {
        deadlinesArr.push({
          orders: dayOrders,
          date: moment(dayOrders[0].date).subtract(-7, "day"), // deadline = 7 days
        });
      }

      arr.push({
        day: day,
        orders: dayOrders,
      });
    }

    arr.forEach((item) => {
      item.dl = deadlinesArr.filter((value) =>
        moment(item.day).isSame(value.date, "day")
      );
    });
  };

  update();
  console.log(arr);
  const changeMonth = (direction: number) => {
    if (viewedMonth === 11 && direction === 1) {
      setViewedMonth(0);
    } else if (viewedMonth === 0 && direction === -1) {
      setViewedMonth(11);
    } else {
      setViewedMonth(viewedMonth + direction);
    }
  };

  const titlesArr = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const titlesElements = titlesArr.map((item: string) => (
    <span className="calendar__title" key={item}>
      {item}
    </span>
  ));

  const daysComponents = arr
    .reverse()
    .map((item: CalendarDayType) => (
      <Day key={item.day.format("DD-MM")} day={item.day} />
    ));

  return (
    <div className="calendar">
      <h1 className="calendar__header">Calendar</h1>
      <div className="calendar__container">{titlesElements}</div>
      <div className="calendar__container">{daysComponents}</div>
      <div>
        <button onClick={() => changeMonth(-1)}>Prev</button>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
    </div>
  );
};

export default Calendar;
