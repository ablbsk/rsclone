import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import { deleteUser, getUsers } from "../../../../services/apiUsers";
import { userDeleted, usersFetching, usersFetched, usersFetchingError } from "../../../../actions";
import { IUsersListComponent } from "../../../../interfaces/usersListComponent";

import "./usersList.scss";

const UsersList: FunctionComponent<IUsersListComponent> = ({
  users,
  activeButton,
}) => {
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

  return (
    <>
      <div className="users-list__wrapper">
        <div className="users-list__item">
          <table>
            <tbody>
              <tr className="table-header">
                <th>Number</th>
                <th>Email</th>
                <th>Id</th>
                <th className="image-column"></th>
              </tr>
              {users.map((item, i) => {
                return (
                  <tr key={item._id}>
                    <th>{i + 1}</th>
                    <th>{item.email}</th>
                    <th>{item._id.slice(0, 8).toLocaleUpperCase()}</th>
                    <th>
                      <button
                        className="icon"
                        onClick={() => deleteItem(item._id)}
                      ></button>
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
