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
import { IUsersListComponent } from "../../../../interfaces/usersListComponent";

import "./usersList.scss";

const UsersList: FunctionComponent<IUsersListComponent> = ({
  users,
  activeButton,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;


  const dispatch = useDispatch();
  const role = activeButton === "1" ? "USER" : "SELLER";

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
                <th>Email</th>
                <th>Id</th>
                <th className="image-column"></th>
                <th className="table-promotion"></th>
              </tr>
              {users.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <th>{i + 1}</th>
                    <th>{item.email}</th>
                    <th>{item._id.slice(0, 8).toLocaleUpperCase()}</th>
                    <th>
                      <button
                      style={{ backgroundColor }}
                        className="icon"
                        onClick={() => deleteItem(item._id)}
                      ></button>
                    </th>
                    <th className="table-promotion">
                      <button onClick={() => deleteItem(item._id)}>
                        Promote
                      </button>
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

export default UsersList;
