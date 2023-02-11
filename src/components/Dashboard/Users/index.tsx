import { FunctionComponent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../../../services/apiUsers";
import {
  usersFetching,
  usersFetched,
  usersFetchingError,
} from "../../../actions";

import { IUsersReducer } from "../../../interfaces/usersReducer";
import UsersList from "./UsersList";
import Spinner from "../../Spinner";

import "./users.scss";

const Users: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("1");
  const usersLoadingStatus = useSelector(
    (state: IUsersReducer) => state.usersReducer.usersLoadingStatus
  );

  const users = useSelector((state: IUsersReducer) => state.usersReducer.users);

  const dispatch = useDispatch();

  const getUsersList = async (role: string) => {
    try {
      dispatch(usersFetching());
      const users = await getUsers(role);
      dispatch(usersFetched(users));
    } catch {
      dispatch(usersFetchingError());
    }
  };

  useEffect(() => {
    getUsersList("USER");
  }, []);

  const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (typeof id === "string") {
      setActiveButton(id);
    }
  };

  const spinner = usersLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <div className="users__wrapper">
      <div className="users__header">
        <button
          className={`users__header-button ${
            activeButton == "1" ? "users__header-button_active" : ""
          }`}
          data-id="1"
          onClick={(e) => {
            getUsersList("USER");
            toggleHandler(e);
          }}
        >
          Users
        </button>
        <button
          className={`users__header-button ${
            activeButton == "2" ? "users__header-button_active" : ""
          }`}
          data-id="2"
          onClick={(e) => {
            getUsersList("SELLER");
            toggleHandler(e);
          }}
        >
          Sellers
        </button>
      </div>
      {spinner}
      {usersLoadingStatus === "idle" ? (
        <UsersList users={users} activeButton={activeButton} />
      ) : null}
    </div>
  );
};

export default Users;
