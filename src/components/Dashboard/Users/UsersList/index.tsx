import { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IUsersReducer } from "../../../../interfaces/usersReducer";
import { IUsersList } from "../../../../interfaces/usersList";
import { IF } from "../../../../interfaces/f";
import { deleteUser } from "../../../../services/apiUsers";

import { userDeleted } from "../../../../actions";

import "./usersList.scss";

const UsersList: FunctionComponent<IF> = ({ users }) => {
  // const users = useSelector((state: IUsersReducer) => state.usersReducer.users);

  const dispatch = useDispatch();

  const deleteItem = async (id: string) => {
    await deleteUser(id);
    dispatch(userDeleted(id));
  };

  return (
    <>
      <div className="users-list__wrapper">
        {/* // {users.map((item, i) => ( */}
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
        {/* ))} */}
      </div>
    </>
  );
};
export default UsersList;
