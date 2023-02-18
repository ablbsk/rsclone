import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import configureStore from "./store/configureStore";

const store = configureStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
