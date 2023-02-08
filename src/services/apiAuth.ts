import { IUser } from "../interfaces/user";
import { IResponce } from "../interfaces/responce";
import { _apiBase } from "./apiBase";

export const registration = async (
  body: Pick<IUser, "email" | "password" | "role">
): Promise<IResponce> => {
  const responce: Response = await fetch(`${_apiBase}/api/auth/registration`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (responce.status !== 200) {
    return { success: false };
  } else {
    return { success: true };
  }
};

export const login = async (body: Pick<IUser, "email" | "password">) => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    } else {
      const { user, token } = await response.json();
      localStorage.setItem("token", JSON.stringify(token));
      return user;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
};
