import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { IStore } from "../../interfaces/store";
import FormSignIn from ".";
import { ILogin } from "../../interfaces/login";
import { authorization } from "../../actions/index";

describe("FormSignIn component", () => {
  const mockStore: IStore = {
    appInterface: {
      accentColor: { static: "#FF0000", hover: "#FF5555" },
      isNavbarNightMode: true,
      isSidebarFixed: false,
      isSidebarAccentMode: false,
      isNightMode: false,
      isProfileShow: false,
      isSidebarShow: false,
    },
  };

  const mockLoginData = {
    email: "test@example.com",
    password: "password",
  };

  test("should display form elements", () => {
    const container = render(
      <Provider store={createStore(() => mockStore)}>
        <MemoryRouter>
          <FormSignIn />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button");

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  test("should submit the form", async () => {
    const mockDispatch = jest.fn();
    const mockNavigate = jest.fn();

    jest.mock("react-redux", () => ({
      useDispatch: () => mockDispatch,
      useSelector: () => mockStore.appInterface,
    }));

    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    jest.mock("../../services/apiAuth", () => ({
      login: () => Promise.resolve(mockLoginData),
    }));

    render(
      <Provider store={createStore(() => mockStore)}>
        <MemoryRouter>
          <FormSignIn />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button");

    fireEvent.change(emailInput, { target: { value: mockLoginData.email } });
    fireEvent.change(passwordInput, {
      target: { value: mockLoginData.password },
    });

    fireEvent.click(submitButton);

    const login = {
      user: {
        email: "test@example.com",
        password: "password",
        role: "role",
        _id: "id",
        date: "date",
      },
      isLogin: true,
    } as ILogin;

    const expectedAction = authorization(login, false);
    mockDispatch(expectedAction);

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
