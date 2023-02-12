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
import { IOrdersListItem } from "@/src/interfaces/ordersListItem";

// import "./ordersList.scss";

const OrdersListItem: FunctionComponent<IOrdersListItem> = ({
  item,
  i,
  deleteItem,
  updateItem,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const [selectedValue, setSelectedValue] = useState("EMPTY");

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

  //   //   const updateItem = async (id: string) => {
  //   //     try {
  //   //       await updateUser(id, { role: "MANAGER" });
  //   //       dispatch(ordersFetching());
  //   //       const orders = await getOrders();
  //   //       dispatch(ordersFetched(orders));
  //   //     } catch {
  //   //       dispatch(ordersFetchingError());
  //   //     }
  //   //   };

  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <th>{item.date.slice(0, 10)}</th>
        <th>{item.price}</th>
        <th>{item.status}</th>
        <th>
          <button
            style={{ backgroundColor }}
            className="icon"
            onClick={() => deleteItem(item._id)}
          ></button>
        </th>
        <th className="table-select">
          <select
            className="sel"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="EMPTY" disabled hidden></option>
            <option value="NON-PAID">NON-PAID</option>
            <option value="PAID">PAID</option>
            <option value="DECLINED">DECLINED</option>
            <option value="IN-PROGRESS">IN PROGRESS</option>
            <option value="FINISHED">FINISHED</option>
          </select>
        </th>
        <th>
          <button
            className="button-apply"
            // style={{ backgroundColor }}
            onClick={() => updateItem(item._id, selectedValue)}
          >
            Apply
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrdersListItem;
