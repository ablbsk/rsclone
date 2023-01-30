import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import "./app.scss";
import Dashboard from "../Dashboard";
import SingIn from "../SingIn";
import SingUp from "../SingUp";
import Home from "../Home";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
