import { FunctionComponent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { IUser } from "../../interfaces/user";
import { registration } from "../../services/apiAuth";

import "./signup.scss";

const SignUp: FunctionComponent = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setMessage(""), 5000);
    setTimeout(() => setError(""), 5000);
  }, [message, error]);

  const click = async (body: Pick<IUser, "email" | "password" | "role">) => {
    try {
      const message = await registration(body);
      setMessage(message);
      setTimeout(() => navigate("/sign-in"), 3000);
    } catch (e) {
      setError(e as string);
    }
  };

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
              role: "USER",
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
              <div className="sign__radio">
                <label>
                  <Field
                    className="radio-field"
                    type="radio"
                    name="role"
                    value="USER"
                  />
                  I am BUYER
                </label>
                <label>
                  <Field
                    className="radio-field"
                    type="radio"
                    name="role"
                    value="SELLER"
                  />
                  I am SELLER
                </label>
              </div>
              <button className="sign__button" type="submit">
                Sign Up
              </button>
              {message && <div className="message-tooltip">{message}</div>}
              {error && <div className="error-tooltip">{error}</div>}
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
