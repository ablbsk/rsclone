export type User = {
  email: string;
  role: string;
};

export interface ILogin {
  user: User;
  isLogin: boolean;
}
