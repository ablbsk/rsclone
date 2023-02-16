import { FunctionComponent } from "react";
import "./signin.scss";

import FormSignIn from "../FormSignIn";

const SignIn: FunctionComponent = () => (
  <div className="sign__wrapper">
    <div className="sign__image">
      <div className="image-wrapper"></div>
    </div>
    <div className="sign__content-wrapper">
      <FormSignIn />
    </div>
  </div>
);

export default SignIn;
