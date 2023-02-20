import "./calendar.scss";
import { FunctionComponent, useEffect, useState } from "react";
import moment, { Moment } from "moment";
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
  const deadlineStep = 7;

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [ordersDeadline, setOrdersDeadline] = useState<IOrder[]>([]);
  const [viewedMonth, setViewedMonth] = useState<number>(moment().month());

  useEffect(() => {
    getOrdersBySellerId(user._id)
      .then((orders: IOrder[]) => {
        const deadlines = orders
          .filter((order: IOrder) => order.status !== "FINISHED")
          .filter((order: IOrder) => order.status !== "DECLINED")
          .map((order: IOrder) => {
            order.deadlineDate = moment(order.date)
              .subtract(-deadlineStep, "day")
              .toISOString();
            return order;
          });

        setOrdersDeadline(deadlines);
        setOrders(orders);
      })
      .catch((e) => console.log(e));
  }, []);

  const arr: CalendarDayType[] = [];

  const createCalendar = () => {
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
      const dayOrders = orders.filter((order) => day.isSame(order.date, "day"));
      addDataToDay(day, dayOrders);
    }
  };

  const addDataToDay = (day: Moment, orders: IOrder[]) => {
    const status = {
      nonPaid: [] as IOrder[],
      paid: [] as IOrder[],
      inProgress: [] as IOrder[],
      declined: [] as IOrder[],
      finished: [] as IOrder[],
      deadline: [] as IOrder[],
    };

    orders.forEach((order: IOrder) => {
      switch (order.status) {
        case "NON-PAID":
          status.nonPaid.push(order);
          break;
        case "PAID":
          status.paid.push(order);
          break;
        case "IN PROGRESS":
          status.inProgress.push(order);
          break;
        case "DECLINED":
          status.declined.push(order);
          break;
        case "FINISHED":
          status.finished.push(order);
          break;
      }
    });

    const a = ordersDeadline.filter((order) => {
      return moment(order.deadlineDate).isSame(day, "day");
    });

    if (a.length) {
      status.deadline.push(...a);
    }

    arr.push({ day: day, status: status });
  };

  createCalendar();

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
      <Day day={item.day} status={item.status} key={item.day.format("DD-MM")} />
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
