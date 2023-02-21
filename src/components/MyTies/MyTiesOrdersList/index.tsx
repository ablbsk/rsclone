import { FunctionComponent } from "react";

import { IOrdersListComponent } from "../../../interfaces/ordersListComponent";
import { useTranslation } from "react-i18next";

const MyTiesOrdersList: FunctionComponent<IOrdersListComponent> = ({
  orders,
}) => {
  const { t } = useTranslation("dataLang");

  return (
    <div className="market-block__products">
      <div className="row__products">
        {orders.map((order, i) => {
          return (
            <div key={i} className="tie__product">
              <div className="tie__products_img">
                <img src={order.image} alt="" className="products_img" />
              </div>
              <div className="tie__products_discription">
                <div className="tie__products_name">
                  {t("myTies.name")}: {order.date}
                </div>
                <div className="tie__products_price">
                  {t("myTies.price")}: {order.price}$
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTiesOrdersList;
