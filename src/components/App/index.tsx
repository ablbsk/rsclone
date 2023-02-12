import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import "./app.scss";
import Dashboard from "../Dashboard";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Home from "../Home";
import Configurator from "../Configurator";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
