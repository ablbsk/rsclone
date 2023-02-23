import "./calendar.scss";
import { FunctionComponent, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import Day from "./Day";
import List from "./List";
import { CalendarDayType } from "../../../types";
import { getOrdersBySellerId } from "../../../services/apiOrders";
import { useSelector } from "react-redux";
import { IStore } from "../../../interfaces/store";
import { IUser } from "../../../interfaces/user";
import { IOrder } from "../../../interfaces/order";
import { useTranslation } from "react-i18next";

const Calendar: FunctionComponent = () => {
  const language = useSelector((state: IStore) => state.langReducer.lang);
  moment.locale(language);
  const { t } = useTranslation("dataLang");

  const user: IUser = useSelector((state: IStore) => state.auth.user);

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [ordersDeadline, setOrdersDeadline] = useState<IOrder[]>([]);
  const [focusedDay, setFocusedDay] = useState({ day: null, status: null });
  const [viewedMonth, setViewedMonth] = useState<number>(moment().month());

  const deadlineStep = 7;
  const dayDataArr: CalendarDayType[] = [];

  useEffect(() => {
    getOrdersBySellerId(user._id)
      .then((orders: IOrder[]) => {
        setOrdersDeadline(prepareOrdersToDeadline(orders));
        setOrders(orders);
      })
      .catch((e) => console.log(e));

    const prepareOrdersToDeadline = (orders: IOrder[]) => {
      return orders
        .filter((order: IOrder) => order.status !== "FINISHED")
        .filter((order: IOrder) => order.status !== "DECLINED")
        .map((order: IOrder) => {
          order.deadlineDate = moment(order.date)
            .subtract(-deadlineStep, "day")
            .toISOString();
          return order;
        });
    };
  }, []);

  const createCalendar = () => {
    const size = 42; // 7 days * 6 weeks
    let start =
      moment()
        .locale("en") // important!
        .subtract(moment().month() - viewedMonth, "month")
        .startOf("month")
        .startOf("isoWeek")
        .dayOfYear() - 1;

    if (language !== "ru") start = start - 1;

    const end = start + size;
    const now = moment().dayOfYear();

    const startI = now - end;
    const endI = now - start;

    for (let i = startI; i < endI; i++) {
      const day = moment().subtract(i, "day");
      const dayOrders = orders.filter((order) => {
        return day.year() !== moment().year()
          ? day.format("DD-MM") === moment(order.date).format("DD-MM")
          : day.isSame(order.date, "day");
      });

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

    const ordersWithDeadline = ordersDeadline.filter((order) =>
      moment(order.deadlineDate).isSame(day, "day")
    );

    if (ordersWithDeadline.length) {
      status.deadline.push(...ordersWithDeadline);
    }

    dayDataArr.push({
      day: day,
      isActiveMonth: day.month() === viewedMonth,
      status: status,
    });
  };

  createCalendar();

  const changeMonth = (direction: number) => {
    let value = viewedMonth + direction;

    if (viewedMonth === 11 && direction === 1) value = 0;
    if (viewedMonth === 0 && direction === -1) value = 11;

    setViewedMonth(value);
  };

  const titlesElements = Array(7)
    .fill(0)
    .map((item: string, i: number) => (
      <span className="calendar__title" key={i}>
        {moment().startOf("week").subtract(-i, "day").format("dddd")}
      </span>
    ));

  const daysComponents = dayDataArr
    .reverse()
    .map((item: CalendarDayType) => (
      <Day
        day={item.day}
        status={item.status}
        isActiveMonth={item.isActiveMonth}
        key={item.day.format("DD-MM")}
        setFocusedDay={setFocusedDay}
      />
    ));

  return (
    <div className="calendar">
      <h1 className="calendar__header">{t("calendar.header")}</h1>
      <div className="calendar__wrapper">
        <div className="calendar__head">
          <div>
            <button onClick={() => changeMonth(-1)}>
              {t("calendar.buttons.previous")}
            </button>
            <button onClick={() => changeMonth(1)}>
              {t("calendar.buttons.next")}
            </button>
          </div>
          <h2 className="calendar__subheader">
            {moment()
              .subtract(1 - viewedMonth, "month")
              .format("MMMM")}
          </h2>
          <div>
            <button onClick={() => setViewedMonth(moment().month())}>
              {t("calendar.buttons.current")}
            </button>
          </div>
        </div>
        <div className="calendar__container">{titlesElements}</div>
        <div className="calendar__container">{daysComponents}</div>
      </div>
      {focusedDay.day ? (
        <List day={focusedDay.day} status={focusedDay.status} />
      ) : null}
    </div>
  );
};

export default Calendar;
