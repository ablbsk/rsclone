import { IUser } from "./user";
// export type User = {
//   email: string;
//   role: string;
// };

export interface ILogin {
  user: IUser;
  isLogin: boolean;
}
