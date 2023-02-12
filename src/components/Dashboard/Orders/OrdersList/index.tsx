import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteOrder,
  getOrders,
  updateOrder,
} from "../../../../services/apiOrders";
import {
  orderDeleted,
  ordersFetching,
  ordersFetched,
  ordersFetchingError,
} from "../../../../actions";
import { lightTheme, nightTheme } from "../../../../data/constants";
import { IStore } from "../../../../interfaces/store";
// import { IAuthReducer } from "../../../../interfaces/authReducer";
import { IOrdersListComponent } from "../../../../interfaces/ordersListComponent";
//import { IOrder } from "../../../../interfaces/order";
import OrdersListItem from "../OrdersListItem";

import "./ordersList.scss";

const OrdersList: FunctionComponent<IOrdersListComponent> = ({ orders }) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  // const [selectedValue, setSelectedValue] = useState('EMPTY');

  //   const authStore = useSelector((state: IAuthReducer) => state.auth);
  //   const { user } = authStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();

  const deleteItem = async (id: string) => {
    try {
      await deleteOrder(id);
      dispatch(orderDeleted(id));
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  const updateItem = async (id: string, status: string) => {
    try {
      await updateOrder(id, { status: status });
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  return (
    <>
      <div className="orders-list__wrapper">
        <div className="orders-list__item">
          <table>
            <tbody>
              <tr className="table-header">
                <th>#</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              {orders.map((item, i) => {
                return (
                  <OrdersListItem
                    key={item._id}
                    item={item}
                    i={i}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
