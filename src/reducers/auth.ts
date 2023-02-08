import { ActionTypes } from "../interfaces/store";
import { AnyAction } from "redux";
import { ILogin } from "../interfaces/login";

const initialState: ILogin = {
  user: { email: "", role: "" },
  isLogin: false,
  error: "",
};

export const auth = (state: ILogin = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.login:
      return {
        ...state,
        user: action.payload.user,
        isLogin: action.payload.isLogin,
      };

    case ActionTypes.addError:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
