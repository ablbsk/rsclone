import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  myTieDeleted,
  myTiesFetching,
  myTiesFetched,
  myTiesFetchingError,
} from "../../../actions";
import { deleteTie, getTiesByUserId } from "../../../services/apiTies";
import { IAuthReducer } from "../../../interfaces/authReducer";
import { IMyTiesListComponent } from "../../../interfaces/myTiesListComponent";
import Hover from "../../Hover";
import { IStore } from "../../../interfaces/store";

const MyTiesList: FunctionComponent<IMyTiesListComponent> = ({ ties }) => {
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const { accentColor } = useSelector((state: IStore) => state.appInterface);

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
                <Hover>
                  <button
                    style={{ backgroundColor: accentColor.static }}
                    className="item__button"
                    onClick={() => deleteItem(item._id)}
                  >
                    {t("myTies.delete")}
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

export default MyTiesList;
