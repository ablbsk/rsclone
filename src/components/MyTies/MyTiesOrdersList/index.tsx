import { FunctionComponent } from "react";

import { IOrdersListComponent } from "../../../interfaces/ordersListComponent";
import { useTranslation } from "react-i18next";

const MyTiesOrdersList: FunctionComponent<IOrdersListComponent> = ({
  orders,
}) => {
  const { t } = useTranslation("dataLang");

  return (
    <>
      <div className="my-ties-orders-list__wrapper">
        {orders.map((item, i) => {
          return (
            <div key={i} className="my-ties-orders-list__item">
              <div className="item__image">
                <img src={item.image} alt="" />
              </div>
              <div className="item__text">
                <div className="item__date">
                  {t("myTiesOrders.date")}: {item.date.slice(0, 10)}
                </div>
                <div className="item__price">
                  {t("myTiesOrders.sum")}: {item.price}$
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTiesOrdersList;
