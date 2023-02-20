import { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../actions";
import { lightTheme, nightTheme } from "../../data/constants";
import { IStore } from "../../interfaces/store";
import { IAuthReducer } from "../../interfaces/authReducer";
import { getOrdersByUserId } from "../../services/apiOrders";
import Spinner from "../Spinner";
import { IMyOrdersReducer } from "../../interfaces/myOrdersReducer";
import ErrorMessage from "../ErrorMessage";
import MyOrdersList from "./MyOrdersList";

import "./myOrders.scss";

const MyOrders: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = interfaceSettings;
  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const myOrdersStore = useSelector(
    (state: IMyOrdersReducer) => state.myOrdersReducer
  );
  const { ordersLoadingStatus, orders } = myOrdersStore;

  const dispatch = useDispatch();

  const getOrders = async (): Promise<void> => {
    try {
      dispatch(myOrdersFetching());
      const orders = await getOrdersByUserId(user._id);
      dispatch(myOrdersFetched(orders));
    } catch {
      dispatch(myOrdersFetchingError());
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const spinner = ordersLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <div className="my-orders__wrapper" style={{ backgroundColor }}>
      {spinner}
      {ordersLoadingStatus === "idle" ? <MyOrdersList orders={orders} /> : null}
      {ordersLoadingStatus === "error" ? <ErrorMessage /> : null}
    </div>
  );
};

export default MyOrders;
