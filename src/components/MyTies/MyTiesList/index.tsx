import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  myTieDeleted,
  myTiesFetching,
  myTiesFetched,
  myTiesFetchingError,
} from "../../../actions";
import { deleteTie, getTiesByUserId } from "../../../services/apiTies";
import { IAuthReducer } from "../../../interfaces/authReducer";
import { IMyTiesListComponent } from "../../../interfaces/myTiesListComponent";
import { useTranslation } from "react-i18next";

const MyTiesList: FunctionComponent<IMyTiesListComponent> = ({ ties }) => {
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const dispatch = useDispatch();

  const { t } = useTranslation("dataLang");

  const deleteItem = async (id: string): Promise<void> => {
    try {
      await deleteTie(id);
      dispatch(myTieDeleted(id));
      dispatch(myTiesFetching());
      const ties = await getTiesByUserId(user._id);
      dispatch(myTiesFetched(ties));
    } catch {
      dispatch(myTiesFetchingError());
    }
  };

  return (
    <>
      <div className="my-ties-list__wrapper">
        {ties.map((item, i) => {
          return (
            <div key={i} className="my-ties-list__item">
              <div className="item__image">
                <img src={item.image} alt="" />
              </div>
              <div className="item__text">
                <div className="item__name">
                  {t("myTies.name")}: {item.name}
                </div>
                <div className="item__price">
                  {t("myTies.price")}: {item.price}$
                </div>
                <button
                  className="item__button"
                  onClick={() => deleteItem(item._id)}
                >
                  {t("myTies.delete")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTiesList;
