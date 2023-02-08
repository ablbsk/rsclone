import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./signup.scss";

const SignUp: FunctionComponent = () => {
  return (
    <div className="sign__wrapper">
      <div className="sign__image">
        <div className="image-wrapper"></div>
      </div>
      <div className="sign__content-wrapper">
        <div className="sign__content">
          <h2 className="sign__title">Sign Up</h2>
          <div className="sign__text">
            Enter your personal details and start journey with us.
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              role: "user",
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
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
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
              <div className="sign__radio">
                <label>
                  <Field
                    className="radio-field"
                    type="radio"
                    name="role"
                    value="user"
                  />
                  I am BUYER
                </label>
                <label>
                  <Field
                    className="radio-field"
                    type="radio"
                    name="role"
                    value="seller"
                  />
                  I am SELLER
                </label>
              </div>
              <button className="sign__button" type="submit">
                Sign Up
              </button>
            </Form>
          </Formik>
          <div className="sign__text-link">
            Already have an Account{" "}
            <Link className="text-link" to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
