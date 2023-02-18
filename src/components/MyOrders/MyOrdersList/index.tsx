import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  myOrderDeleted,
  myOrdersFetching,
  myOrdersFetched,
  myOrdersFetchingError,
} from "../../../actions";
import { deleteOrder, getOrdersByUserId } from "../../../services/apiOrders";
import { IAuthReducer } from "../../../interfaces/authReducer";
import { IOrdersListComponent } from "../../../interfaces/ordersListComponent";
import Hover from "../../Hover";
import { IStore } from "../../../interfaces/store";

const MyOrdersList: FunctionComponent<IOrdersListComponent> = ({ orders }) => {
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const { accentColor } = useSelector((state: IStore) => state.appInterface);

  const dispatch = useDispatch();

  const { t } = useTranslation("dataLang");

  const deleteItem = async (id: string): Promise<void> => {
    try {
      await deleteOrder(id);
      dispatch(myOrderDeleted(id));
      dispatch(myOrdersFetching());
      const orders = await getOrdersByUserId(user._id);
      dispatch(myOrdersFetched(orders));
    } catch {
      dispatch(myOrdersFetchingError());
    }
  };

  return (
    <>
      <div className="my-orders-list__wrapper">
        {orders.map((item, i) => {
          return (
            <div key={i} className="my-orders-list__item">
              <div className="item__image">
                <img src={item.image} alt="" />
              </div>
              <div className="item__text">
                <h4>{t("myOrders.data")}</h4>
                <div className="item__date">
                  {t("myOrders.date")}: {item.date.slice(0, 10)}
                </div>
                <div className="item__price">
                  {t("myOrders.sum")}: {item.price}$
                </div>
                <div className="item__status">
                  {t("myOrders.status")}: {item.status}
                </div>
                <Hover>
                  <button
                    style={{ backgroundColor: accentColor.static }}
                    className="item__button"
                    onClick={() => deleteItem(item._id)}
                  >
                    {t("myOrders.delete")}
                  </button>
                </Hover>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyOrdersList;
