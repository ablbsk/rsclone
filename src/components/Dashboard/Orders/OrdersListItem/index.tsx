import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";

import { lightTheme, nightTheme } from "../../../../data/constants";
import { IStore } from "../../../../interfaces/store";
import { IOrdersListItem } from "@/src/interfaces/ordersListItem";
import { useTranslation } from "react-i18next";

const OrdersListItem: FunctionComponent<IOrdersListItem> = ({
  item,
  i,
  deleteItem,
  updateItem,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const { t } = useTranslation("dataLang");

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
            <option value="NON-PAID">{t("select.nonPaid")}</option>
            <option value="PAID">{t("select.paid")}</option>
            <option value="DECLINED">{t("select.declined")}</option>
            <option value="IN-PROGRESS">{t("select.inProgress")}</option>
            <option value="FINISHED">{t("select.finished")}</option>
          </select>
        </th>
        <th>
          <button
            className="button-apply"
            onClick={() => updateItem(item._id, selectedValue)}
          >
            {t("ordersTable.apply")}
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrdersListItem;
