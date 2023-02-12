import { FunctionComponent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOrders } from "../../../services/apiOrders";
import {
  ordersFetching,
  ordersFetched,
  ordersFetchingError,
} from "../../../actions";
import { IStore } from "../../../interfaces/store";

import { IOrdersReducer } from "../../../interfaces/ordersReducer";
import { lightTheme, nightTheme } from "../../../data/constants";
import OrdersList from "./OrdersList";
import Spinner from "../../Spinner";
// import Hover from "../../Hover";

import "./orders.scss";

const Orders: FunctionComponent = () => {
  const ordersStore = useSelector(
    (state: IOrdersReducer) => state.ordersReducer
  );
  const { ordersLoadingStatus, orders } = ordersStore;
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNightMode } = appInterfaceStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();

  const getOrdersList = async () => {
    try {
      dispatch(ordersFetching());
      const orders = await getOrders();
      console.log(orders);
      dispatch(ordersFetched(orders));
    } catch {
      //dispatch(ordersFetchingError());
    }
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  //   const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     const id = e.currentTarget.dataset.id;
  //     if (typeof id === "string") {
  //       setActiveButton(id);
  //     }
  //   };

  const spinner = ordersLoadingStatus === "loading" ? <Spinner /> : null;
  console.log(orders);

  return (
    <div className="orders__wrapper" style={{ backgroundColor }}>
      {spinner}
      {ordersLoadingStatus === "idle" ? <OrdersList orders={orders} /> : null}
    </div>
  );
};

export default Orders;
