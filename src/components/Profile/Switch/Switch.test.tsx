import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Switch from ".";

const mockStore = configureStore([]);

describe("Switch", () => {
  // eslint-disable-next-line
  let store: any;

  beforeEach(() => {
    store = mockStore({
      appInterface: {
        accentColor: {
          static: "#000",
          hover: "#fff",
        },
      },
    });
  });

  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Switch />
        </Router>
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
