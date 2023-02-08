import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { IUser } from "../../interfaces/user";
import { ILogin } from "../../interfaces/login";
import { login } from "../../services/apiAuth";

import "./signin.scss";

const SignIn: FunctionComponent = () => {
  const click = async (body: Pick<IUser, "email" | "password">) => {
    try {
      const data = await login(body);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="sign__wrapper">
      <div className="sign__image">
        <div className="image-wrapper"></div>
      </div>
      {/* {error ? <div>error</div>: ''} */}
      <div className="sign__content-wrapper">
        <div className="sign__content">
          <h2 className="sign__title">Sign In</h2>
          <div className="sign__text">
            To Keep connected with us please login with your personal info.
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Incorrect email")
                .required("Required field"),
              password: Yup.string()
                .min(4, "Minimum 4 symbols")
                .max(10, "Maximum 10 symbols")
                .required("Required field"),
            })}
            onSubmit={(values) => {
              click(values);
            }}
          >
            <Form className="form">
              <Field
                className="field"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage className="error" name="email" component="div" />
              <Field
                className="field"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage className="error" name="password" component="div" />
              <button className="sign__button" type="submit">
                Sign In
              </button>
            </Form>
          </Formik>
          <div className="sign__text-link">
            Create an Account{" "}
            <Link className="text-link" to="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
