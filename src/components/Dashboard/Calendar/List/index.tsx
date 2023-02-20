import "./list.scss";
import moment from "moment";
import {FunctionComponent, ReactElement} from "react";
import { CalendarListType } from "../../../../types";
import { IOrder } from "../../../../interfaces/order";
import classNames from "classnames";

const Index: FunctionComponent<CalendarListType> = ({
  day,
  status,
}: CalendarListType) => {
  const statusKeys = Object.keys(status);
  const elements: any[] = [];

  statusKeys.forEach((key: string) => {
    status[key].forEach((item: IOrder) => {
      const el = (
        <div
          className={classNames("list__item", {
            "list__item--warning": moment(day).isSame(item.deadlineDate, "day"),
          })}
          key={item._id}
        >
          <img className="list__image" src={item.image} alt="" />
          <span>{moment(item.date).format("D MMMM")}</span>
          <span>{item.status}</span>
          <span>{item.price}</span>
          <span>{moment(item.deadlineDate).format("D MMMM")}</span>
        </div>
      );
      elements.push(el);
    });
  });

  return (
    <div className="list">
      <h4 className="list__header">{moment(day).format("D MMMM")}</h4>
      <div className="list__item">
        <span>Img</span>
        <span>Order</span>
        <span>Status</span>
        <span>Price</span>
        <span>Deadline</span>
      </div>
      {elements}
    </div>
  );
};

export default Index;
