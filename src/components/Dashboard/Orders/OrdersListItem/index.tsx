import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";

import { lightTheme, nightTheme } from "../../../../data/constants";
import { IStore } from "../../../../interfaces/store";
import { IOrdersListItem } from "@/src/interfaces/ordersListItem";

const OrdersListItem: FunctionComponent<IOrdersListItem> = ({
  item,
  i,
  deleteItem,
  updateItem,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const [selectedValue, setSelectedValue] = useState("EMPTY");

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

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
            className="select"
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
