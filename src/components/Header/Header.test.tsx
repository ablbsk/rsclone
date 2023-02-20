import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from ".";
import { showProfile, changeLanguage, showSidebar } from "../../actions/index";

const mockStore = configureStore([]);

describe("Header component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      langReducer: {
        lang: "en",
      },
      auth: {
        user: {
          role: "USER",
        },
      },
    });
  });

  test("renders correctly", () => {
   const container = render(
      <Provider store={store}>
        <Router>
          <Header
            accentColor={{ static: "#fff", hover: "#000" }}
            isNavbarNightMode={false}
            isButtonVisible={true}
          />
        </Router>
      </Provider>
    );

    expect(screen.getByTitle("button__lang")).toBeDefined();
    expect(screen.getByTitle("header__profile")).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("should show the sidebar when the hamburger button is clicked", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header
            accentColor={{ static: "#fff", hover: "#000" }}
            isNavbarNightMode={false}
            isButtonVisible={true}
          />
        </Router>
      </Provider>
    );

    const mockDispatch = jest.fn();
    const expectedAction = showSidebar();
    mockDispatch(expectedAction);

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });

  test("changes language when language button is clicked", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header
            accentColor={{ static: "#fff", hover: "#000" }}
            isNavbarNightMode={false}
            isButtonVisible={true}
          />
        </Router>
      </Provider>
    );

    const mockDispatch = jest.fn();

    const expectedActionFirst = changeLanguage({ lang: "ru" });
    mockDispatch(expectedActionFirst);

    expect(mockDispatch).toHaveBeenCalledWith(expectedActionFirst);

    const expectedActionSecond = changeLanguage({ lang: "en" });
    mockDispatch(expectedActionSecond);

    expect(mockDispatch).toHaveBeenCalledWith(expectedActionSecond);
  });

  test("should show the profile when the profile button is clicked", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header
            accentColor={{ static: "#fff", hover: "#000" }}
            isNavbarNightMode={false}
            isButtonVisible={true}
          />
        </Router>
      </Provider>
    );

    const mockDispatch = jest.fn();
    const expectedAction = showProfile();
    mockDispatch(expectedAction);

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
