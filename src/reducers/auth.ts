import { ActionTypes, ILogin } from "../interfaces/store";
import { AnyAction } from "redux";

const initialState: ILogin = {
  user: { email: "", role: "" },
  isLogin: false,
};

export const auth = (state: ILogin = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.login:
      return {
        ...state,
        user: action.payload.user,
        isLogin: action.payload.isLogin,
      };

    default:
      return state;
  }
};
