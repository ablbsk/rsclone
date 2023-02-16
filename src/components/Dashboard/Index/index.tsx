import "./index.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import CircularProgress from "./CircularProgress";
import Graph from "./Graph";
import { specialColors } from "../../../data/constants";
import { IStore } from "../../../interfaces/store";
import { getOrders, getUsers } from "../../../services/apiDashboard";
import { IOrder } from "../../../interfaces/order";
import moment from "moment";

const Index: FunctionComponent = () => {
  const state = useSelector((state: IStore) => state);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((e) => console.log(e));

    getUsers({ role: "USER" })
      .then((users) => setUsers(users))
      .catch((e) => console.log(e));

    getUsers({ role: "SELLER" })
      .then((sellers) => setSellers(sellers))
      .catch((e) => console.log(e));
  }, []);

  const getTotalRevenue = () => {
    const result = orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" ? res + order.price : res;
    }, 0 as number);

    return `$${result}`;
  };

  const getTodaySales = () => {
    return orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" && moment().isSame(order.date, "day")
        ? res++
        : res;
    }, 0 as number);
  };

  const getOrdersRatio = () => {
    const current = orders.filter((order: IOrder) =>
      moment(order.date).isSame(moment(), "month")
    );

    const prev = orders.filter((order: IOrder) =>
      moment(order.date).isSame(moment().subtract(1, "month"), "month")
    );

    return Math.round((current.length / prev.length) * 100);
  };

  const currentMonthRevenue = () => {
    return orders.reduce((res, order: IOrder) => {
      return order.status === "FINISHED" &&
        moment(order.date).isSame(moment(), "month")
        ? res + order.price
        : res;
    }, 0 as number);
  };

  return (
    <div className="index">
      <h1 className="index__header">Welcome to dashboard</h1>
      <p className="index__breadcrumbs">Home - Dashboard</p>
      <div className="index__cards">
        <Card
          colors={specialColors.red}
          icon={"like"}
          value={getTotalRevenue()}
          title={"Total Revenue"}
        />
        <Card
          colors={specialColors.aqua}
          icon={"cart"}
          value={getTodaySales()}
          title={"Today's Sales"}
        />
        <Card
          colors={specialColors.blue}
          icon={"chart"}
          value={sellers.length}
          title={"Sellers Count"}
        />
        <Card
          colors={specialColors.orange}
          icon={"view"}
          value={users.length}
          title={"Users Count"}
        />
      </div>
      <div className="index__additional">
        <CircularProgress
          progress={getOrdersRatio()}
          todaySales={currentMonthRevenue()}
        />
        <Graph isNightMode={state.appInterface.isNightMode} orders={orders} />
      </div>
    </div>
  );
};

export default Index;
