import { FunctionComponent } from "react";
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

import "./ordersList.scss";

const OrdersList: FunctionComponent<IOrdersListComponent> = ({ orders }) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;
  //   const authStore = useSelector((state: IAuthReducer) => state.auth);
  //   const { user } = authStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();

  //   const deleteItem = async (id: string) => {
  //     try {
  //       await deleteOrder(id);
  //       dispatch(orderDeleted(id));
  //       dispatch(ordersFetching());
  //       const orders = await getOrders();
  //       dispatch(ordersFetched(orders));
  //     } catch {
  //       dispatch(ordersFetchingError());
  //     }
  //   };

  //   const updateItem = async (id: string) => {
  //     try {
  //       await updateUser(id, { role: "MANAGER" });
  //       dispatch(ordersFetching());
  //       const orders = await getOrders();
  //       dispatch(ordersFetched(orders));
  //     } catch {
  //       dispatch(ordersFetchingError());
  //     }
  //   };

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
                  <tr key={item._id}>
                    <th>{i + 1}</th>
                    <th>{item.date}</th>
                    <th>{item.price}</th>
                    <th>{item.status}</th>
                    <th>
                      <button
                        style={{ backgroundColor }}
                        className="icon"
                        // onClick={() => deleteItem(item._id)}
                      ></button>
                    </th>
                    <th className="table-promotion">
                      <button>Promote</button>
                    </th>
                  </tr>
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
