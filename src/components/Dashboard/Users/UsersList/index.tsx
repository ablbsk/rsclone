import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteUser,
  getUsers,
  updateUser,
} from "../../../../services/apiUsers";
import {
  userDeleted,
  usersFetching,
  usersFetched,
  usersFetchingError,
} from "../../../../actions";
import { lightTheme, nightTheme } from "../../../../data/constants";
import { IStore } from "../../../../interfaces/store";
import { IAuthReducer } from "../../../../interfaces/authReducer";
import { IUsersListComponent } from "../../../../interfaces/usersListComponent";
import { useTranslation } from "react-i18next";

import "./usersList.scss";

const UsersList: FunctionComponent<IUsersListComponent> = ({
  users,
  activeButton,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();
  const role = activeButton === "1" ? "USER" : "SELLER";

  const { t } = useTranslation("dataLang");

  const deleteItem = async (id: string) => {
    try {
      await deleteUser(id);
      dispatch(userDeleted(id));
      dispatch(usersFetching());
      const users = await getUsers(role);
      dispatch(usersFetched(users));
    } catch {
      dispatch(usersFetchingError());
    }
  };

  const updateItem = async (id: string) => {
    try {
      await updateUser(id, { role: "MANAGER" });
      dispatch(usersFetching());
      const users = await getUsers(role);
      dispatch(usersFetched(users));
    } catch {
      dispatch(usersFetchingError());
    }
  };

  return (
    <>
      <div className="users-list__wrapper">
        <div className="users-list__item">
          <table>
            <tbody>
              <tr className="table-header">
                <th>#</th>
                <th>{t("usersTable.email")}</th>
                <th>{t("usersTable.id")}</th>
                {user.role === "ADMIN" ? (
                  <>
                    <th className="image-column"></th>
                    <th className="table-promotion"></th>
                  </>
                ) : null}
              </tr>
              {users.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <th>{i + 1}</th>
                    <th>{item.email}</th>
                    <th>{item._id.slice(0, 8).toLocaleUpperCase()}</th>
                    {user.role === "ADMIN" ? (
                      <>
                        <th>
                          <button
                            style={{ backgroundColor }}
                            className="icon"
                            onClick={() => deleteItem(item._id)}
                          ></button>
                        </th>
                        <th className="table-promotion">
                          <button onClick={() => updateItem(item._id)}>
                            {t("usersTable.promote")}
                          </button>
                        </th>
                      </>
                    ) : null}
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

export default UsersList;
